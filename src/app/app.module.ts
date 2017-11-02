import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { AppComponent }        from './app.component';
import { NavigationComponent} from './navigation.component'
// Reservations templates
import { ReservationComponent } from './reservations/reservation.component'
import { ReservationDetailComponent } from './reservations/detail/reservation-detail.component'
// Reservations services
import { ReservationService } from './reservations/reservation.service'
// Dashboards templates
import { DashboardComponent } from './dashboard/dashboard.component'

import { PermissionComponent } from './permissions/permission.component'

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReservationComponent,
    ReservationDetailComponent,
    PermissionComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
