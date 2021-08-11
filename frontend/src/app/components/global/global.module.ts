import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardMenuComponent } from './card-menu/card-menu.component';
import { AlertComponent } from './alert/alert.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';




@NgModule({
  declarations: [
    CardMenuComponent,
    AlertComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    CardMenuComponent,
    AlertComponent ,
    DialogBoxComponent
  ]
})
export class GlobalModule { }
