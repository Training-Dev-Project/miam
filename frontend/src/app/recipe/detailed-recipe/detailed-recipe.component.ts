import { Component, Input, OnInit } from '@angular/core';
import { IngredientServiceService } from 'src/app/ingredient/ingredient-service.service';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.scss']
})
export class DetailedRecipeComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  // ingredients: { [id: number]: string; } = {};
  ingredients: { [name: string]: number; } = {};


  constructor(private ingredientService: IngredientServiceService) { }

  ngOnInit(): void {
    this.ingredientService.onGetIngredientsByIds(Object.keys(this.recipe.ingredients).map(Number)).subscribe(data => {
      // data.forEach((element: Ingredient) => { this.ingredients[element.id] = element.name; });
      data.forEach((element: Ingredient) => { this.ingredients[element.name] = this.recipe.ingredients[element.id]; });
    });
    // console.log(this.recipe.ingredients);
  }

}
