import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { RouterModule } from '@angular/router'; 


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
    RouterModule
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
