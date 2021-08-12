import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import {Recipe} from "../../models/recipe";
import {IngredientServiceService} from "../../ingredient/ingredient-service.service";
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  ingredientsFromRecipe : { [name: string] : number; } = {};
  allIngredients: Array<Ingredient> = [];
  recipe : Recipe = {name:"", ingredients:{}};
  ingredientToAdd: Ingredient = {name: '', id: 0};
  ingredientToAddQuantity: number = 1;
  
  isValid : boolean = true;
  alertVisibility : Boolean = false;
  constructor(private recipeService: RecipeServiceService, private ingredientService: IngredientServiceService) { }

  ngOnInit(): void {
    // Retrieve all ingredients from DB
    this.ingredientService.onGetAllIngredients().subscribe(data => {
      this.allIngredients = data; 
    });
  }

  onSubmit() {
    if (this.isValid) {
      this.recipeService.saveRecipe(this.recipe).subscribe( response => {this.alertVisibility = true;} );
    } else {
      this.alertVisibility = false;
      alert("Name is invalid")
    }
  }

  addIngredientToRecipe(ingredientToAdd: Ingredient, ingredientToAddQuantity: number){
    this.recipe.ingredients[ingredientToAdd.id!] = ingredientToAddQuantity;
    console.log(this.recipe);

    this.ingredientsFromRecipe[ingredientToAdd.name] = ingredientToAddQuantity;
    console.log(this.ingredientsFromRecipe);
  }
}
