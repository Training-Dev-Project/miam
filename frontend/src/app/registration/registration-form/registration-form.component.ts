import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  user: User;
  confirmPassword: string = "";


  constructor(
    private registrationService: RegistrationService,
  ) {
    this.user = {
      name: "",
      email: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  validatePassword(password1: string, password2: string) {
    return password1 == password2
  }

  onSubmit() {
    if (this.validatePassword(this.user.password, this.confirmPassword)) {
      this.registrationService.onSubmitRegistrationForm(this.user).subscribe(response => {
        if (response.error.code === 'EMAIL_ALREADY_EXISTS') {
          //formRegistration.valid error A FAIRE + .invalid 
        }

      })
    }
  }

}
