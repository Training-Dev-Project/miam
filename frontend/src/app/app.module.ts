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
import { RecipePageComponent } from './components/recipe/recipe-page/recipe-page.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownFormComponent,
    IngredientFormComponent,
    RecipePageComponent,
    RecipeFormComponent
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
