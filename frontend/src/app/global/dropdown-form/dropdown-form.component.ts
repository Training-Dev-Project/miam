import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss']
})
export class DropdownFormComponent {

  faUser = faUser;

  constructor(
    private router: Router,
  ) {}

  
  register(){
    this.router.navigate(['/register'])
  }
}
