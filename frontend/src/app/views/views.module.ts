import { NgModule } from '@angular/core'; 
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GlobalModule } from '../global/global.module';


@NgModule({
  declarations: [
    MaintenanceComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    GlobalModule
  ],
  exports:[
    MaintenanceComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class ViewsModule { }
