import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  user: User;
  alertVisibility : Boolean = false;
  loading: boolean = false; 
  hasErrors: boolean = false;

  constructor(
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.user = {
      name: "",
      email: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(formRegistration: NgForm) {
    if (formRegistration.valid && !this.hasErrors) { // !!! CHANGE HERE 
      this.registrationService.register(this.user)
        .subscribe(response => {
          this.alertVisibility = true;
          if (response.error.code === 'EMAIL_ALREADY_EXISTS') { // !!!! ADD EXCEPTION IN BACKEND
            //formRegistration.valid error A FAIRE + .invalid 
            this.alertVisibility = false;
            alert("L'adresse email déjà utilisé pour un compte utilisateur")
          }

      }); 
      // .subscribe(
      //   data => {
      //       this.alertService.success('Registration successful', { keepAfterRouteChange: true });
      //       this.router.navigate(['../login'], { relativeTo: this.route });
      //   },
      //   error => {
      //       this.alertService.error(error);
      //       this.loading = false;
      //   });

    }
  }

}
