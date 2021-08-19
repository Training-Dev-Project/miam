import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardMenuComponent } from './card-menu/card-menu.component';
import { AlertComponent } from './alert/alert.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    CardMenuComponent,
    AlertComponent,
    DialogBoxComponent,
    DropdownFormComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    CardMenuComponent,
    AlertComponent,
    DialogBoxComponent,
    DropdownFormComponent,
    ImageUploaderComponent
  ]
})
export class GlobalModule { }
