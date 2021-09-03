import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationRoutingModule } from './registration-routing.module';


@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    RegistrationRoutingModule
  ],
  exports: [
    RegistrationFormComponent
  ],
})
export class RegistrationModule { }
