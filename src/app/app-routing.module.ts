import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationComponent } from './reservations/reservation.component'
import { ReservationDetailComponent} from './reservations/detail/reservation-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PermissionComponent } from './permissions/permission.component'
  
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'applications',
    component: ReservationComponent
  },
  {
    path: 'applications/:id',
    component: ReservationDetailComponent
  },
  {
    path: 'permissions',
    component: PermissionComponent
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}