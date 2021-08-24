import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrationForm } from '../models/registration-form';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  readonly apiPath:string = '/register';
  private defaultHeader: HttpHeaders= new HttpHeaders({'Content-type': 'application/json'});
  
  constructor(private client:HttpClient) { 

  }

  onSubmitRegistrationForm(registrationForm: RegistrationForm): Observable<any>{
    // console.log(environment.urlBackend + this.apiPath)
      return this.client.post(environment.urlBackend + this.apiPath , registrationForm, {headers : this.defaultHeader} );

              // .map( (response:Ingredient)  => response );
  }
}
