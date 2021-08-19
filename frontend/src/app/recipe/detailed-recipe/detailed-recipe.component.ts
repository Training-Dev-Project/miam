import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.scss']
})
export class DetailedRecipeComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
