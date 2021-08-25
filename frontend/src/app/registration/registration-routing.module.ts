import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RegistrationFormComponent } from './registration-form/registration-form.component';

// import { ListRecipesComponent } from './list-recipes/list-recipes.component'; 
// import { RecipeFormComponent } from './recipe-form/recipe-form.component';


const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent},
//   { path: 'list-recipes', component: ListRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
