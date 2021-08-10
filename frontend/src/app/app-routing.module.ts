import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingIngredientsComponent } from './components/ingredient/listing-ingredients/listing-ingredients.component';
import { IngredientFormComponent } from './components/ingredient/ingredient-form/ingredient-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'list-ingredients', component: ListingIngredientsComponent },
  { path : 'create-ingredient', component: IngredientFormComponent },
  { path: 'recipe', component: RecipeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
