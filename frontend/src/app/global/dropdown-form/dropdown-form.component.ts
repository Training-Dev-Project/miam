import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss']
})
export class DropdownFormComponent implements OnInit {
  credentials = {
    email: 'b@t.man',
    password: 'password'
  }
  invalidLogin = false
  faUser = faUser;

  constructor(private router: Router, public loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.credentials.email, this.credentials.password)
    ) {
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  logOut(){
    this.loginService.logOut()
    this.router.navigate(["/"])
  }

  register() {
    this.router.navigate(['/register'])
  }
}
