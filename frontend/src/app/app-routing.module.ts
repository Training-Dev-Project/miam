import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RecipeModule } from './../app/components/recipe/recipe.module';

import { IngredientModule } from './components/ingredient/ingredient.module';

import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workflow-ingredients', loadChildren: () => import('./../app/components/ingredient/ingredient.module').then(m => m.IngredientModule)},
  { path: 'workflow-recipes', loadChildren: () => import('./../app/components/recipe/recipe.module').then(m => m.RecipeModule)},
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
