import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeModule } from './recipe/recipe.module';

import { IngredientModule } from './ingredient/ingredient.module';
import { RegistrationModule } from './registration/registration.module';
import { HomeComponent } from './views/home/home.component';
import { LogoutComponent } from './global/logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'workflow-ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule) },
  { path: 'workflow-recipes', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    IngredientModule,
    RegistrationModule,
    RecipeModule
  ]
})
export class AppRoutingModule { }
