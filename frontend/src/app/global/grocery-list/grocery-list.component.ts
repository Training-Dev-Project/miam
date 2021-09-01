import {Component, Input, OnInit} from '@angular/core';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {GroceryList} from "../../models/grocery-list";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
    faShoppingCart = faShoppingCart
    faTrash = faTrash

    @Input() headerMode = true
    popupVisible: boolean = true

    groceryList: GroceryList = {name: "Ma liste de courses", ingredients: [], dishes: []}
    sessionStorageKey = "GroceryList-" + new Date().getDate() + "/" + new Date().getMonth()

    addIngredient(ingredient: Ingredient, quantity: number) {
        this.groceryList.ingredients.push({ingredient, quantity})
        this.saveGrocerySession()
    }

    addDish(recipe: Recipe, quantity: number) {
        this.groceryList.dishes.push({recipe, quantity})
        this.saveGrocerySession()
    }

    showPopup() {
        this.popupVisible = !this.popupVisible
    }

    emptyList() {
        this.groceryList.ingredients = []
        this.groceryList.dishes = []
        this.saveGrocerySession()
    }

    saveGrocerySession() {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(this.groceryList))
    }

    getGrocerySession() {
        let localGroceryList = sessionStorage.getItem(this.sessionStorageKey)
        if (!localGroceryList) {
            this.saveGrocerySession()
        } else {
            this.groceryList = JSON.parse(localGroceryList)
        }
    }

    constructor() {
    }

    ngOnInit(): void {
        this.getGrocerySession()
        let ingredient = {id: 1, name: "banane", image: ""}
        let recipe = {name: "tarte a la banane", ingredients: {2: 2}, peopleNumber: 2}
        this.addIngredient(ingredient,1)
        this.addDish(recipe,2)
    }
}
