import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardMenuComponent } from './card-menu/card-menu.component';
import { AlertComponent } from './alert/alert.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { ErrorInputComponent } from './error-input/error-input.component';
import { FieldEmptyValidator } from '../directives/field-empty-validator.directive';
import { DecodeErrorMessagePipe } from '../pipes/decode-error-message.pipe';


import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    CardMenuComponent,
    AlertComponent,
    DialogBoxComponent,
    DropdownFormComponent,
    ErrorInputComponent,
    FieldEmptyValidator,
    DecodeErrorMessagePipe,
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
    FieldEmptyValidator,
    ErrorInputComponent,
    DecodeErrorMessagePipe,
    ImageUploaderComponent
  ]
})
export class GlobalModule { }
