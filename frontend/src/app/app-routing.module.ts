import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RecipeModule } from './recipe/recipe.module';

import { IngredientModule } from './ingredient/ingredient.module';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workflow-ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule)},
  { path: 'workflow-recipes', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [
    RouterModule,
    IngredientModule,
    RecipeModule
  ]
})
export class AppRoutingModule { }
