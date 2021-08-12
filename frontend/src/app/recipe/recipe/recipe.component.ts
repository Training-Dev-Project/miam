import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  // @Input() name : string =  "";
  // @Input() ingredients: { [ingredientId: number] : number } = {};
  @Input() recipe : Recipe = {name:"", ingredients: {}};
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe)
  }

}
