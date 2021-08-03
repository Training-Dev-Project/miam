import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient : Ingredient = {name:""}
  isValid : Boolean = false

  constructor(private ingredientService: IngredientServiceService) {

  }

  ngOnInit(): void {
  }

  validateInput(ingredient: Ingredient){
    if (ingredient.name && ingredient.name.length >= 3 && ingredient.name.length < 20 ) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  onSubmit() {
    if (this.isValid) {
      this.ingredientService.onSubmitIngredient(this.ingredient).subscribe( response => {console.log(response)})
    } else {
      alert("Name is invalid")
    }
  }

}
