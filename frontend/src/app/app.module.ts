import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IngredientFormComponent } from './components/ingredient/ingredient-form/ingredient-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngredientComponent } from './components/ingredient/ingredient/ingredient.component';
import { ListingIngredientsComponent } from './components/ingredient/listing-ingredients/listing-ingredients.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { RecipePageComponent } from './components/recipe/recipe-page/recipe-page.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';
import { ListRecipesComponent } from './components/recipe/list-recipes/list-recipes.component';
import { RecipeComponent } from './components/recipe/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownFormComponent,
    IngredientFormComponent,
    IngredientComponent,
    ListingIngredientsComponent,
    HomePageComponent,
    PageContainerComponent,
    AlertComponent,
    RecipePageComponent,
    RecipeFormComponent,
    ListRecipesComponent,
    RecipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
