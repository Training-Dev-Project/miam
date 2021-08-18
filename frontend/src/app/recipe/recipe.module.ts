import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RecipeRoutingModule } from './recipe-routing.module';

import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ListRecipesComponent,
    RecipeComponent,
    RecipeFormComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    RecipeRoutingModule
  ],
  exports: [
    ListRecipesComponent,
    RecipeComponent,
    RecipeFormComponent,
    RecipePageComponent
  ],
})
export class RecipeModule { }
