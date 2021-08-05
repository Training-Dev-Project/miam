import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {IngredientServiceService} from "../../ingredient/ingredient-service.service";
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
  }
  ingredients : string[] = [];
  isValid : boolean = true;
  recipe : Recipe = {name:"",recipeIngredients:{}}
    ingredientToAddId: string = "Banane";
    ingredientToAddQuantity: number = 0;



  onSubmit() {
    if (this.isValid) {
      this.recipeService.saveRecipe(this.recipe).subscribe( response => {console.log(response)})
    } else {
      alert("Name is invalid")
    }
  }

  addIngredientToRecipe(id: string,quantity : number){
    this.recipe.recipeIngredients[id]=quantity;
    if(this.ingredients.indexOf(id)==-1){
      this.ingredients.push(id);
    }


  }

}
