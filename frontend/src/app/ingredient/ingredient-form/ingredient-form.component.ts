import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';
import { AppContextService } from 'src/app/app.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient : Ingredient = {name: '', id: 0}
  isValid : Boolean = false
  alertVisibility : Boolean = false;
  ingredients: Array<Ingredient> = [];

  constructor(private ingredientService: IngredientServiceService, private appCtx: AppContextService) {
  }

  ngOnInit(): void {
  }

  validateInput(ingredient: Ingredient){
    if (ingredient.name && ingredient.name.length >= 3 && ingredient.name.length < 20 ) {
      this.isValid = true;
    } else {
      this.isValid = false
    }
  }

  onSubmit() {
    if (this.isValid) {
      this.ingredientService.onSubmitIngredient(this.ingredient).subscribe( response => {
        this.alertVisibility = true;
        this.ingredients =   this.appCtx.getIngredientsObservable().getValue();
        this.ingredients.push(response);
        this.appCtx.setIngredientsObservable(this.ingredients);
      }, error => {})
    } else {
    this.alertVisibility = false;
      alert("Name is invalid")
    }
  }

}
