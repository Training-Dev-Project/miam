import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../../models/registration-form';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  user: RegistrationForm = {name: "",
    email:"",
    password1:"",
    password2:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  validatePassword(password1: string , password2: string){
    
    return password1 == password2
  }

  onSubmit(){

  }

}
