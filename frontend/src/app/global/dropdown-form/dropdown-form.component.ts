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
  showLoginError = false;

  constructor(private router: Router,
    public loginService: AuthenticationService,
    public tks: TokenStorageService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.showLoginError = false
    this.loginService.authenticate(this.email, this.password).subscribe((data) => {
      this.tks.saveToken(data.jwt)
    },error => {
          this.showLoginError = true;
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
    )
  }


  logOut(){
    this.loginService.logOut()
    this.router.navigate(["/"])
  }

  register() {
    this.router.navigate(['/register'])
  }
}
