import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/timeout';

import { Metric } from '../_wrappers/metric'
import { ChartWrapper } from '../_wrappers/chart'

@Injectable()
export class DashboardService {
    url = "http://localhost:3000/api/admin/dashboards/metrics"
    urlChart = "http://localhost:3000/api/admin/dashboards/charts"

    constructor(
        private http: HttpClient
    ){}

    getMetrics(): Promise<Metric> {
        
        return this.http.get(this.url)
            .toPromise()
            .then(data => {
                console.log(data)
                return data as Metric
            })
            .catch(this.handleError)
    }

    getMetricsWeekly(): Promise<Metric> {
        
        return this.http.get(`${this.url}?timeFrame=week`)
            .toPromise()
            .then(data => {
                console.log(data)
                return data as Metric
            })
            .catch(this.handleError)
    }

    getMetricsMonthly(): Promise<Metric> {
        
        return this.http.get(`${this.url}?timeFrame=month`)
            .toPromise()
            .then(data => {
                console.log(data)
                return data as Metric
            })
            .catch(this.handleError)
    }

    getChartData(): Promise<ChartWrapper> {
        
        return this.http.get(this.urlChart)
            .toPromise()
            .then(data => {
                console.log(data)
                return data as ChartWrapper
            })
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}