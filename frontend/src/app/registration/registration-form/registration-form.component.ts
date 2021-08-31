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
  alertVisibility : Boolean
  isValidFormSubmitted = false; 
  hasErrors: boolean = false;
  namePattern = "^[A-Za-z]+(\s+[-]+[A-Za-z]+){0,4}$"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  messageSubmit: string;

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
    this.messageSubmit = ""
    this.alertVisibility = false
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm)
    if (userForm.valid) { // !!! CHANGE HERE 
      this.alertVisibility = true;
      this.registrationService.register(this.user)
        .subscribe(response => {
          
          this.messageSubmit = "Votre compte vient d'être créé ! "
          setTimeout( () => {this.router.navigate(['/'])}, 1000)
      }, error =>{
        if (error.error.message === 'EMAIL_ALREADY_USED') { 
          this.messageSubmit = "L'adresse email déjà utilisé pour un compte utilisateur"
        }
      });
      
    }
  }

}
