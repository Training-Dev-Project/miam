import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { ListingIngredientsComponent } from './listing-ingredients/listing-ingredients.component';

const routes: Routes = [
  { path: 'list-ingredients', component: ListingIngredientsComponent },
  { path : 'create-ingredient', component: IngredientFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
