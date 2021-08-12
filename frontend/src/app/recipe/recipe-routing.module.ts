import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { ListRecipesComponent } from './list-recipes/list-recipes.component'; 
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes: Routes = [
  { path: 'recipe', component: RecipeFormComponent},
  { path: 'list-recipes', component: ListRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
