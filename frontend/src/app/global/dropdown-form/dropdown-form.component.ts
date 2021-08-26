import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss']
})
export class DropdownFormComponent {


  constructor(
    private router: Router,
  ) {}

  
  register(){
    this.router.navigate(['/register'])
  }
}
