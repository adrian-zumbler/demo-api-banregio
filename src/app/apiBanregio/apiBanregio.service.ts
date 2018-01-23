import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccountResponse } from '../_wrappers/accounts-response' 
import { TransactionResponse } from '../_wrappers/transaction-response' 
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiBanregioService {
    baseUrlApi = "https://api.banregio.com/v1"
    accessToken: string

    constructor(
        private http: HttpClient
    ){}

    getAccounts(): Promise<AccountResponse> {
        console.log("token",this.getAccessToken());
        return this.http.get(this.baseUrlApi + '/accounts',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getAccessToken()),
            }
        ).toPromise()
        .then(data => {
            return data as AccountResponse
        })
    }

    getTransactions(accountId): Promise<TransactionResponse> {
        return this.http.get(this.baseUrlApi + '/accounts/' +accountId + '/transactions' ,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getAccessToken()),
            }
        ).toPromise()
        .then(data => {
            return data as TransactionResponse
        })
    }

    getAccessToken(): string {
        return localStorage.getItem('access_token');
    }
}