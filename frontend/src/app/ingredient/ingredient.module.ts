import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { GlobalModule } from '../global/global.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ListingIngredientsComponent } from './listing-ingredients/listing-ingredients.component';


@NgModule({
  declarations: [
    IngredientFormComponent,
    IngredientComponent,
    ListingIngredientsComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule, 
    FontAwesomeModule,
    IngredientRoutingModule,
    NgbModule
  ]
})
export class IngredientModule { }
