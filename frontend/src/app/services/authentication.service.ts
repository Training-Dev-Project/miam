import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(email: string, password: string) {
    if (email === "b@t.man" && password === "password") {
      localStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('email')
    return (user === "b@t.man")
  }

  logOut() {
    localStorage.removeItem('email')
  }
}
