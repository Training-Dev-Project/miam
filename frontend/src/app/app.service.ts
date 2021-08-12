import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './models/ingredient';


@Injectable()
export class AppContextService { 
  private ingredients = new BehaviorSubject<Ingredient[]>([]);

  getIngredientsObservable(){
    return this.ingredients;
  }

  setIngredientsObservable(ingredients:Ingredient[]){
     this.ingredients.next(ingredients)
  }
}
