import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  readonly apiPath: string = '/users/register';
  private defaultHeader: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private client: HttpClient) {

  }

  register(user: User): Observable<any> {
    // console.log(environment.urlBackend + this.apiPath)
    return this.client.post(environment.urlBackend + this.apiPath, user, { headers: this.defaultHeader });

    // .map( (response:Ingredient)  => response );
  }
}
