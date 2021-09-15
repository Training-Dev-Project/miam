import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';



const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
  { path: 'FBlogin', component: FacebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
