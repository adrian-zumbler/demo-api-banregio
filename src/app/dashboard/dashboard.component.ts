import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { environment } from '../../environments/environment'
import { DashboardService } from './dashboard.service'
import { ApiOAuthService } from '../apiBanregio/apiOAuth.service';
import { ApiBanregioTokenHelper } from '../apiBanregio/apiBanregioTokenHelper';
import { ApiBanregioService } from '../apiBanregio/apiBanregio.service';
import { Account } from '../_wrappers/account'
import { Transaction } from '../_wrappers/transaction'

@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    public created:object
    public active:object
    public finished:object
    public noShow:object
    public cancelled:object
    public isAuthenticated: boolean = false
    public authorizeUrl: string
    private code: string
    private accessToken: string
    public accounts: Account[]
    public transactions: Transaction[]
    


    constructor(
      private dashboardService: DashboardService,
      private apiOAuthService: ApiOAuthService,
      private apiBanregioService: ApiBanregioService,
      private activatedRoute: ActivatedRoute,
      private router:Router
    ){
      
      
    }

    ngOnInit(): void{
      this.getIsAuthenticated();
      if (!this.isAuthenticated) {
        let tokenHelper = new ApiBanregioTokenHelper(
          environment.client_id,
          environment.client_secret,
          environment.redirect_uri
        );
        this.authorizeUrl = tokenHelper.build().getAuthorizeUrl()
        this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.code = params['code'];
          if(this.code != null) {
            this.getAccessToken(this.code);
            window.location.href = 'http://localhost:4200/dashboard';
            
          }
          
        });
      } else {
        this.getAccounts();
      }

    }

    getAccessToken(code:string): void {
      this.apiOAuthService.getAccessToken(code)
      .then(response => {
        console.log(response);
        this.accessToken = response.access_token
        localStorage.setItem('access_token', this.accessToken);
      })
    }

    getAccounts(): void {
      this.apiBanregioService.getAccounts()
      .then(response=>{
        console.log(response['accounts']);
        this.accounts = response['accounts'] as Array<Account>;
        this.getTransactions(this.accounts[0].id);
        })
      }
    

    getTransactions(accountId): void {
      this.apiBanregioService.getTransactions(accountId)
      .then(response=>{
        this.transactions = response['transactions'] as Array<Transaction>;
        console.log(this.transactions);
      }) 
    }

    getIsAuthenticated(): void {
      let tmpAccessToken = localStorage.getItem('access_token');
      if (tmpAccessToken) {
        this.isAuthenticated = true;
      }
    }


    getMetrics(): void{
      this.dashboardService.getMetrics()
        .then(response => {
          console.log(response)
          this.created = response.created
          this.active = response.active
          this.finished = response.finished
          this.noShow = response.no_show
          this.cancelled = response.cancelled
        })
    }

}