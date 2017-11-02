import { Component, OnInit } from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Rx';



import { Reservation } from './reservation'
import { ReservationService } from './reservation.service'

@Component({
    selector: 'reservation',
    templateUrl: './reservation.component.html'
})

export class ReservationComponent implements OnInit {
    private page: number = 1;
    private query: string = ''
    reservations: Reservation[] = []

    constructor(
        
        private activatedRoute: ActivatedRoute,
        private reservationService: ReservationService,
        private router: Router
    ){}

    ngOnInit(): void {
        
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.page = params['page'];
            if( typeof params['query'] !== 'undefined') { this.query = params['query']}
            console.log(this.page);
          });
        this.getApplications()
    }

    getApplications(): void {
        this.reservationService.getApplications(+this.page,this.query).then(reservations => this.reservations = reservations )
    }

    goToDetail(reservation: Reservation): void {
        this.router.navigate(['applications/',reservation.id])
    }

    goNext(): void {
        let current_page = +this.page + 1;
        this.page = current_page;
        this.router.navigate(['applications/'],{ queryParams: { page: current_page } })
        this.getApplications()
        
    }

    search(query:string): void {
        let current_query = query;
        this.query = query;
        this.router.navigate(['applications/'],{ queryParams: { page: 1, query: current_query } })
        this.getApplications()
    }

    resetSearch(): void {
        this.page = 1
        this.query = ''
        this.router.navigate(['applications/'],{ queryParams: { page: this.page,} })
        this.getApplications()
    }
}