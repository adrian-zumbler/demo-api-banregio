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
// Reservations services
// Dashboards templates
import { DashboardComponent } from './dashboard/dashboard.component';
// Dashboard services
import { DashboardService } from './dashboard/dashboard.service';
import { ApiOAuthService } from './apiBanregio/apiOAuth.service';
import { ApiBanregioService } from './apiBanregio/apiBanregio.service';
// Salon Templates

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
  ],
  providers: [
    DashboardService,
    ApiOAuthService,
    ApiBanregioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
