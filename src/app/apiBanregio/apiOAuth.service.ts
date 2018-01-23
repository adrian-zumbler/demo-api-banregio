import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { TokenResponse } from '../_wrappers/token-response'

@Injectable()
export class ApiOAuthService {
    baseUrlOAuth = "https://api.banregio.com/oauth/token"

    constructor(
        private http: HttpClient
    ){}

    public getAccessToken(code:string): Promise<TokenResponse> {
        return this.http.post(this.baseUrlOAuth,{
            "code": code ,
            "client_id": environment.client_id,
            "client_secret": environment.client_secret,
            "grant_type": "authorization_code",
            "redirect_uri": environment.redirect_uri
        }).toPromise()
        .then(data => {
            return data as TokenResponse
        })
    }
}