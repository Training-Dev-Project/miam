import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	readonly apiPath: string = '/users/login';
	private defaultHeader: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

	constructor(private client: HttpClient, private tks: TokenStorageService) { }

	authenticate(email: string, password: string): Observable<any> {
    let user = {
      "username":email,
      "password":password
    }
    return this.client.post(environment.urlBackend + this.apiPath, user, { headers: this.defaultHeader });
	}

  isUserLoggedIn() {
    let jwtToken = this.tks.getToken()
    return jwtToken != null ? jwtToken?.length > 20 : false
  }

  logOut() {
    this.tks.signOut()
  }
}
