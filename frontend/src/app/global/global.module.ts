import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
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
    LogoutComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
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

        LogoutComponent,
        ShopCartComponent,
        NotificationComponent
 ]
})
export class GlobalModule { }
