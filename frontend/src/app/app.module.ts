import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { GlobalModule } from './global/global.module';
import { RegistrationModule } from './registration/registration.module';

import { AppContextService } from './app.service';
import { AuthenticationService } from './services/authentication.service';
import { TokenStorageService } from './services/token-storage.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    GlobalModule,
    ViewsModule,
    RegistrationModule,
  ],
  exports: [
  ],
  providers: [
    AuthenticationService,
    TokenStorageService,
    AppContextService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
