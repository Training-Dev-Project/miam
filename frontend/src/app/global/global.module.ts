import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardMenuComponent } from './card-menu/card-menu.component';
import { AlertComponent } from './alert/alert.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ErrorInputComponent } from './error-input/error-input.component';
import { FieldEmptyValidator } from '../directives/field-empty-validator.directive';
import { DecodeErrorMessagePipe } from '../pipes/decode-error-message.pipe';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { NotificationComponent } from './notification/notification.component'; 

@NgModule({
  declarations: [
    CardMenuComponent,
    AlertComponent,
    DialogBoxComponent,
    ImageUploaderComponent,
    DropdownFormComponent,
    ErrorInputComponent,
    FieldEmptyValidator,
    DecodeErrorMessagePipe,
    GroceryListComponent,
    ShopCartComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
        CardMenuComponent,
        AlertComponent,
        DialogBoxComponent,
        DropdownFormComponent,
        FieldEmptyValidator,
        ErrorInputComponent,
        DecodeErrorMessagePipe,
        ImageUploaderComponent,
        GroceryListComponent,
        ShopCartComponent,
        NotificationComponent
 ]
})
export class GlobalModule { }
