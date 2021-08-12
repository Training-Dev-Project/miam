import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { GlobalModule } from './global/global.module';

import { AppComponent } from './app.component';
import { AppContextService } from './app.service';


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
    ViewsModule
  ],
  exports:[
  ],
  providers: [
    AppContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
