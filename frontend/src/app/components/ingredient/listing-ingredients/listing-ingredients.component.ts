import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';

@Component({
  selector: 'app-listing-ingredients',
  templateUrl: './listing-ingredients.component.html',
  styleUrls: ['./listing-ingredients.component.scss']
})
export class ListingIngredientsComponent implements OnInit {
  /* = [
      {name: "tomate"},
      {name: "farine"},
      {name: "banane"},
    ]; */
  /* = [
    {name: "tomate"},
    {name: "farine"},
    {name: "banane"},
  ]; */
  /* = [
      {name: "tomate"},
      {name: "farine"},
      {name: "banane"},
    ]; */
  /* = [
    {name: "tomate"},
    {name: "farine"},
    {name: "banane"},
  ]; */
  ingredients: Array<Ingredient> = [];

  constructor(private ingredientService: IngredientServiceService,) {

  }

  ngOnInit(): void {
    this.ingredientService.onGetAllIngredients().subscribe(data => { this.ingredients = data; })
  }

  deleteIngredient(name: string) {
    this.ingredientService.onDeleteIngredient(name).subscribe()
    this.ingredientService.onGetAllIngredients().subscribe(data => { this.ingredients = data; })
  }
}