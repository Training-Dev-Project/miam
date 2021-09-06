import { Injectable } from '@angular/core';
import { ExceptionError } from '../models/error-exception';
import { GroceryList } from '../models/grocery-list'; 
import { Entity, EntityQuantity, ProtoTypeGroceryList } from '../types';
import { MessageError } from '../utils/message-error';

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

/**
 * 
 * @param element 
 * @param type 
 */
  create<T extends Omit<ProtoTypeGroceryList,'name'>>(element: EntityQuantity | any, type : T): void{
    let key = `groceryList_${type}`;
    let cValue = type as unknown;

     if(key){
      let datas:Array<EntityQuantity> = [];

      if(cValue ==='dishes') cValue = 'recipe';
      if(cValue ==='ingredients') cValue = 'ingredient';

      if(localStorage.getItem(key)){
        datas = JSON.parse(localStorage.getItem(key) as '');
      }

      let index = -1;

      index = datas.findIndex((el:EntityQuantity| any) => el[`${cValue}`].id === element[`${cValue}`].id)
    
      if(index !==-1){
        throw new ExceptionError(MessageError.EXISTING_ELEMENT_ON_CART);
      }
      else{
        datas.push(element);
      }

      localStorage.setItem(key,JSON.stringify(datas));
     }  
  }
/**
 * 
 * @param element 
 * @param type 
 * @param increment 
 */
  update<T extends Omit<ProtoTypeGroceryList,'name'>>(element: Entity, type: T , increment=true): void{
    let key = `groceryList_${type}`;
    let cValue = type as unknown;

    if(key){
      let datas:Array<EntityQuantity> = [];

      if(localStorage.getItem(key)){
         datas= JSON.parse(localStorage.getItem(key) as '');
      }

      if(cValue ==='dishes') cValue = 'recipe';
      if(cValue ==='ingredients') cValue = 'ingredient';

      let elmnt = datas.filter((el:any) =>{
        return(
          el[`${cValue}`].id === element.id
        ) 
      });

      if(increment){
          elmnt[0].quantity++;
      }
      else{
        elmnt[0].quantity--;
      }
      if(elmnt[0].quantity === 0) throw new ExceptionError(MessageError.CONFIRM_MESSAGE);

      localStorage.setItem(key,JSON.stringify(datas));
    }
  }

/**
 * 
 * @param id 
 * @param type 
 */
  delete<T extends Omit<ProtoTypeGroceryList,'name'>>(element: Entity, type : T): void{
    let key = `groceryList_${type}`;
    let cValue = type as unknown;

    if(key){
      let datas:Array<EntityQuantity> = [];

      if(cValue ==='dishes') cValue = 'recipe';
      if(cValue ==='ingredients') cValue = 'ingredient';

      if(localStorage.getItem(key)){
        datas = JSON.parse(localStorage.getItem(key) as '');
      }

      let index = -1;
      index = datas.findIndex((el:EntityQuantity| any) => el[`${cValue}`].id === element.id);
      datas.splice(index, 1);
      
      localStorage.setItem(key,JSON.stringify(datas));
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

  countAll(): number{
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