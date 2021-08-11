import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { IngredientModule } from './components/ingredient/ingredient.module';

import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredients', loadChildren: () => import('./../app/components/ingredient/ingredient.module').then(m => m.IngredientModule)},
  { path: '', component: HomePageComponent},
  { path: 'list-ingredients', component: ListingIngredientsComponent },
  { path : 'create-ingredient', component: IngredientFormComponent },
  { path: 'recipe', component: RecipeFormComponent},
  { path: 'list-recipes', component: ListRecipesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    IngredientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
