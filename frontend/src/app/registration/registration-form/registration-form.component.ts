import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../../models/registration-form';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  user: RegistrationForm 
  

  constructor(
    private registrationService: RegistrationService, 
  ) { 
    this.user = {name: "",
      email:"",
      password1:"",
      password2:""
    }
  }

  ngOnInit(): void {
  }

  validatePassword(password1: string , password2: string){
    
    return password1 == password2
  }

  onSubmit(){
    if(this.validatePassword(this.user.password1, this.user.password2)){
      this.registrationService.onSubmitRegistrationForm(this.user).subscribe(response =>{
        if(response.error.code === 'EMAIL_ALREADY_EXISTS'){
          //formRegistration.valid error A FAIRE + .invalid 
        }
        
      })
    }
  }

}
