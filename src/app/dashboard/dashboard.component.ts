import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service'

@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    public created:object
    public active:object
    public finished:object
    public noShow:object
    public cancelled:object

    constructor(
      private dashboardService: DashboardService
    ){}

    ngOnInit(): void{
      this.getMetrics()
      this.getChartData()
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

    getMetricsWeekly(): void {
      this.dashboardService.getMetricsWeekly()
      .then(response => {
        console.log(response)
        this.created = response.created
        this.active = response.active
        this.finished = response.finished
        this.noShow = response.no_show
        this.cancelled = response.cancelled
      })
    }

    getMetricsMonthly(): void {
      this.dashboardService.getMetricsMonthly()
      .then(response => {
        console.log(response)
        this.created = response.created
        this.active = response.active
        this.finished = response.finished
        this.noShow = response.no_show
        this.cancelled = response.cancelled
      })
    }

    getChartData(): void {
      this.dashboardService.getChartData()
        .then(response => {
          console.log(response)
          this.lineChartLabels = response.x
          this.lineChartData = [
            {data: response.y, label: 'Reservas'},
          ];
        })
    }

    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      ];
      public lineChartLabels:Array<any> = [
"01:00",
"02:00",
"03:00",
"04:00",
"05:00",
"06:00",
"07:00",
"08:00",
"09:00",
"10:00",
"11:00",
"12:00",
"13:00",
"14:00",
"15:00",
"16:00",
"17:00",
"18:00",
"19:00",
"20:00",
"21:00",
"22:00",
"23:00"
];
      public lineChartOptions:any = {
        responsive: true
      };
      public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: '#2dccd3',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ];
      public lineChartLegend:boolean = true;
      public lineChartType:string = 'line';
     
      public randomize():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
          _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
          for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
          }
        }
        this.lineChartData = _lineChartData;
      }
     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }

      // Doughnut
    public doughnutChartLabels:string[] = ['Oxxo', 'Centro', 'Tarejeta','Paypal'];
    public doughnutChartData:number[] = [10, 15, 30,12];
    public doughnutChartType:string = 'doughnut';

}