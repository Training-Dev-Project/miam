import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import {Recipe} from "../../models/recipe";
import {IngredientServiceService} from "../../ingredient/ingredient-service.service";
import {RecipeServiceService} from "../recipe-service.service";
import { AppContextService } from 'src/app/app.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  ingredientsFromRecipe : { [name: string] : number; } = {};
  allIngredients: Array<Ingredient> = [];
  errorMessages: Array<string> = [];
  recipe : Recipe = {name:"", ingredients:{},peopleNumber:1};
  ingredientToAdd!: Ingredient;
  ingredientToAddQuantity: number = 1;
  
  isValid : boolean = true;
  alertVisibility : Boolean = false;
  recipes: Recipe[] = [];
  
  constructor(private recipeService: RecipeServiceService, private ingredientService: IngredientServiceService, private appCtx: AppContextService) { }

  ngOnInit(): void {
    // Retrieve all ingredients from DB
    this.ingredientService.onGetAllIngredients().subscribe(data => {
      this.allIngredients = data; 
    });
  }

  onSubmit() {
    this.validateForm(this.recipe)
    if (this.isValid) {
      this.recipeService.saveRecipe(this.recipe).subscribe( response => {
        this.alertVisibility = true;
        this.recipes =   this.appCtx.getRecipesObservable().getValue();
        this.recipes.push(response);
        this.appCtx.setRecipesObservable(this.recipes);
      } );
    } else {
      this.alertVisibility = false;
      alert(this.errorMessages[0])
    }
  }
  validateForm(recipe : Recipe) {
    if (recipe.peopleNumber < 1 || recipe.peopleNumber>30){
      this.isValid = false;
      this.errorMessages.push("Nombre de personnes invalid (entre 1 et 30)");
    }else{
      this.isValid = true;
    }
  }
  addIngredientToRecipe(ingredientToAdd: Ingredient, ingredientToAddQuantity: number){
    this.recipe.ingredients[ingredientToAdd.id!] = ingredientToAddQuantity;
    console.log(this.recipe);

    this.ingredientsFromRecipe[ingredientToAdd.name] = ingredientToAddQuantity;
    console.log(this.ingredientsFromRecipe);
  }
}
