import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule, 
    FormsModule,
    
  ]
})
export class RegistrationModule { }
