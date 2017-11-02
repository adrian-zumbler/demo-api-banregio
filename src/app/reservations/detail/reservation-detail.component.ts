import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ReservationService } from "../reservation.service";
import { Reservation } from "../reservation";


@Component({
    selector: 'reservation-detail',
    templateUrl: './reservation-detail.component.html'
})

export class ReservationDetailComponent implements OnInit {

    reservation: Reservation;

    constructor(
        private reservationService: ReservationService,
        private route: ActivatedRoute,

    ){}

    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.reservationService.getReservation(+params.get('id')))
          .subscribe(reservation => this.reservation = reservation);
      }
}