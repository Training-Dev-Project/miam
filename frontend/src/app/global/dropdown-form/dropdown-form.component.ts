import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { TokenStorageService } from '../../services/token-storage.service';

import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss']
})
export class DropdownFormComponent implements OnInit {

  invalidLogin = false
  faUser = faUser;
  email = "";
  password = "";

  constructor(private router: Router,
    public loginService: AuthenticationService,
    public tks: TokenStorageService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginService.authenticate(this.email, this.password).subscribe((data) => {
      this.tks.saveToken(data.jwt)
    })
  }

  logOut(){
    this.loginService.logOut()
    this.router.navigate(["/"])
    console.log(this.tks.getToken())
  }

  register() {
    this.router.navigate(['/register'])
  }
}
