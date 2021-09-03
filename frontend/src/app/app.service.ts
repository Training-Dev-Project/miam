import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './models/ingredient';
import { Recipe } from './models/recipe';


@Injectable()
export class AppContextService { 
  private ingredients = new BehaviorSubject<Ingredient[]>([]);
  private recipes = new BehaviorSubject<Recipe[]>([]);
  private datasManagement= new Map<string, any>();

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

  getDatasByKey(key:string): any{
     return JSON.parse(localStorage.getItem(key) as '');
  }

  setDatasByKey(key:string, data: any): void{
     localStorage.setItem(key, JSON.stringify(data));
 }

}
