import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

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
// Dashboard services
import { DashboardService } from './dashboard/dashboard.service'

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
    NgHttpLoaderModule,
    ChartsModule
  ],
  providers: [
    ReservationService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
