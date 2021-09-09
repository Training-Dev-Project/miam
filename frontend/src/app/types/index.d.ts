import { Ingredient } from "../models/ingredient";
import { Recipe } from "../models/recipe";

export interface RecipeQuantity {
    recipe: Recipe;
    quantity: number 
  }
  
export interface IngredientQuantity {
    ingredient: Ingredient;
    quantity: number    
}
  
export type ProtoTypeGroceryList = 'dishes' | 'ingredients' | 'name';
  
export type EntityQuantity = RecipeQuantity | IngredientQuantity;

export type Entity = Recipe | Ingredient;