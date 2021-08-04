import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
@Component({
  selector: 'app-listing-ingredients',
  templateUrl: './listing-ingredients.component.html',
  styleUrls: ['./listing-ingredients.component.scss']
})
export class ListingIngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [
    {name: "tomate"},
    {name: "farine"},
    {name: "banane"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

