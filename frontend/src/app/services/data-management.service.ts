import { Injectable } from '@angular/core'; 
import { GroceryList } from '../models/grocery-list';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
 
export interface RecipeQuantity {
  recipe: Recipe;
  quantity: number 
}

export interface IngredientQuantity {
  ingredient: Ingredient;
  quantity: number 
}

export type ProtoTypeGroceryList = 'dishes' | 'ingredients' | 'name';

export type EntityQuantity = RecipeQuantity | IngredientQuantity

@Injectable({
  providedIn: 'root'
})
export class DataManagementService{

  private groceryList!: GroceryList ;

  constructor() {
    this. groceryList = {
      ingredients: [],
      dishes: [],
      name: ''
    };
  } 

  create<T extends Omit<ProtoTypeGroceryList,'name'>>(element: EntityQuantity, type : T){
    let key = `groceryList_${type}`;
     if(key){
       let dishes = [];
       if(localStorage.getItem(key)){
          dishes= JSON.parse(localStorage.getItem(key) as '');
       }
         dishes.push(element);
         localStorage.setItem(key,JSON.stringify(dishes));
     }  
  }

  getAll(): GroceryList{
    ['dishes', 'ingredients', 'name'].forEach((el: string)=>{
      let key = `groceryList_${el}`;
      if(key && localStorage.getItem(key)){
         this.groceryList[el as ProtoTypeGroceryList] = JSON.parse(localStorage.getItem(key) as '[]');
      }
    })
    return this.groceryList;
  }

  countAll():number{
   let totalArticles:number[] = [], keysTotal = 0;
   ['dishes', 'ingredients'].forEach((el: string)=>{
    let key = `groceryList_${el}`;
    if(key && localStorage.getItem(key)){
       this.groceryList[el as ProtoTypeGroceryList] = JSON.parse(localStorage.getItem(key) as '[]');
       totalArticles.push(this.groceryList[el as ProtoTypeGroceryList].length);
    }
   });
   if(totalArticles){
      keysTotal = totalArticles.reduce((a,b)=>a+b, 0);
   }
   return keysTotal;
  }

}