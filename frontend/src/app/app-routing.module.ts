import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingIngredientsComponent } from './components/ingredient/listing-ingredients/listing-ingredients.component';

const routes: Routes = [
  { path: 'list-ingredients', component: ListingIngredientsComponent },
  // { path: 'create-ingredient', component: ListingIngredientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
