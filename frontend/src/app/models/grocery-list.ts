import {Ingredient} from "./ingredient";
import {Recipe} from "./recipe";


export interface GroceryList {
    id?: number;
    name: string;
    ingredients: Array<{ ingredient: Ingredient, quantity: number }>
    dishes: Array<{ recipe: Recipe, quantity: number }>
}

