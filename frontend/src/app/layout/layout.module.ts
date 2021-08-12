import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { GlobalModule } from '../global/global.module';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppToolbarComponent,
    HeaderMenuComponent,
    PageContainerComponent,
    AppBodyComponent
  ],
  imports: [
    RouterModule,
    FontAwesomeModule,
    GlobalModule
  ],
  exports:[
    AppBodyComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppToolbarComponent,
    HeaderMenuComponent,
    PageContainerComponent,
    RouterModule
  ]
})
export class LayoutModule { }
