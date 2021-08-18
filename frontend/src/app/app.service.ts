import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './models/ingredient';
import { Recipe } from './models/recipe';


@Injectable()
export class AppContextService { 
  private ingredients = new BehaviorSubject<Ingredient[]>([]);
  private recipes = new BehaviorSubject<Recipe[]>([]);

  getIngredientsObservable(){
    return this.ingredients;
  }

  setIngredientsObservable(ingredients:Ingredient[]){
     this.ingredients.next(ingredients)
  }

  getRecipesObservable(){
    return this.recipes;
  }

  setRecipesObservable(recipes:Recipe[]){
     this.recipes.next(recipes)
  }
}
