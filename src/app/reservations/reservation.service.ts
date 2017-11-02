import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/timeout';

import { Reservation } from "./reservation"
import { APLICATIONS } from "./mock"

@Injectable()
export class ReservationService {
    url = "http://localhost:3000/api/admin/appointments"
    constructor(
        private http: HttpClient
    ){}
    
    getApplications(page:number,query:string): Promise<Reservation[]> {

        return this.http.get(`${this.url}/?page=${page}&query=${query}`)
            .toPromise()
            .then(data => {
                console.log(data)
                return data['appointments!'] as Reservation[]
            })
            .catch(this.handleError)
    }

    getReservation(id: number): Promise<Reservation> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(data => data as Reservation)
          .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}