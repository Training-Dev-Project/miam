import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  recipes : Array<Recipe> = [];
  alertVisibility = false;
  currentDelete : string ="";
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(data => { this.recipes = data; })
    //console.log(this.recipes)
  }

  deleteById(id: number, name: string) {
      this.recipeService.deleteById(id).subscribe(() => {
        this.recipes= this.recipes.filter(i => i.id !== id);
        this.currentDelete = name;
        this.alertVisibility = true;
      });
    }
}
