import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipePageComponent } from './components/recipe/recipe-page/recipe-page.component';

const routes: Routes = [{ path: '', component: AppComponent }, { path: 'recipe', component: RecipePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
