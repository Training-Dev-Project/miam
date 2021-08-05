import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingIngredientsComponent } from './components/ingredient/listing-ingredients/listing-ingredients.component';
import { IngredientFormComponent } from './components/ingredient/ingredient-form/ingredient-form.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'list-ingredients', component: ListingIngredientsComponent },
  { path : 'create-ingredient', component: IngredientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
