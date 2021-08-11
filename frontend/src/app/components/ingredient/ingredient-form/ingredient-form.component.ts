import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient : Ingredient = {name:"", id: 0}
  isValid : Boolean = false
  alertVisibility : Boolean = false;

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
      this.ingredientService.onSubmitIngredient(this.ingredient).subscribe( response => {this.alertVisibility = true;})
       this.alertVisibility = true;
    } else {
    this.alertVisibility = false;
      alert("Name is invalid")
    }
  }

}
