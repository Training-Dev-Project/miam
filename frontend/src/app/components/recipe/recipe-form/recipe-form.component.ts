import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import {Recipe} from "../../../models/recipe";
import {IngredientServiceService} from "../../ingredient/ingredient-service.service";
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  ingredientsName : Array<string> = [];

  allIngredients: Array<Ingredient> = [];
  isValid : boolean = true;
  recipe : Recipe = {name:"", ingredients:{}};
  ingredientToAddId: number = 0;
  // ingredientToAdd: Ingredient = {name: ""};
  ingredientToAddQuantity: number = 1;

  constructor(private recipeService: RecipeServiceService, private ingredientService: IngredientServiceService) { }

  ngOnInit(): void {
    // Retrieve all ingredients from DB
    this.ingredientService.onGetAllIngredients().subscribe(data => {
      this.allIngredients = data; 
    });
  }




  onSubmit() {
    if (this.isValid) {
      this.recipeService.saveRecipe(this.recipe).subscribe( response => {console.log(response)});
    } else {
      alert("Name is invalid")
    }
  }

  addIngredientToRecipe(ingredientToAddId: number, ingredientToAddQuantity: number){
    this.recipe.ingredients[ingredientToAddId] = ingredientToAddQuantity;
    console.log(this.recipe);
    // if (this.ingredients.indexOf(ingredient.id) == -1) {
    //   this.ingredients.push(id);
    // }
  }

}
