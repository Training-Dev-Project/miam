import {Component, Input, OnInit} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {GroceryList} from "../../models/grocery-list";
import {Ingredient} from "../../models/ingredient";


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  faShoppingCart = faShoppingCart
  @Input() headerMode = true;
  popupVisible:boolean = false;
  groceryList: GroceryList ={name:"Ma liste de courses",ingredients:[],dishes: []};

  createGroceryList(){
    let today = new Date()
    let localStorageKey = "GroceryList-"+today.getDate()+"/"+today.getMonth()
    let localGroceryList= localStorage.getItem(localStorageKey)
    if (!localGroceryList){
      localStorage.setItem(localStorageKey,JSON.stringify(this.groceryList))
    }else{
      let groceryListObject = JSON.parse(localGroceryList)
      this.groceryList = groceryListObject
    }
  }
  addIngredient (ingredient : Ingredient,quantity : number){
  ingredient = {id:1,name:"banane",image:""}
    this.groceryList.ingredients.push({ingredient,quantity:3})
    console.log(this.groceryList)
  }
  showPopup(){
    let ingredient = {id:1,name:"banane",image:""}
    this.addIngredient(ingredient,1)
    this.popupVisible=!this.popupVisible

  }

  constructor() { }

  ngOnInit(): void {
    this.createGroceryList()
  }

}
