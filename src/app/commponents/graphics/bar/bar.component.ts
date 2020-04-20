import { Component, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { AuthService } from '../../auth/auth.service';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public ChartDataV: Array<any> = [
    { data: [], label: 'Venta' }
  ];
  public ChartDataC: Array<any> = [
    { data: [], label: 'Compra' }
  ];
  public ChartVenta: Array<any> = [];
  public ChartCompra: Array<any> = [];
  

  public ChartColorsC: Array<any> = [
    { 
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public ChartColorsV: Array<any> = [
    { 
      backgroundColor: '#F1E7B6',
      borderColor: '#D6C15A',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  valid = false;
  venta;
  compra;

  public ChartLegend = true;
  public ChartType = 'bar';
  public ChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private auth:AuthService, private socket:SocketService) {
    this.socket.onSell().subscribe(res => {
      this.ngOnInit();
    });
    this.socket.onBuild().subscribe(res => {
      this.ngOnInit();
    });
  }

  ngOnInit(){
    this.ChartDataV[0]['data'] = [];
    this.ChartDataC[0]['data'] = [];
    this.ChartVenta = [];
    this.ChartCompra = [];
    
    this.venta = this.auth.getWallet()['history'][0]['venta'];
    this.compra = this.auth.getWallet()['history'][0]['compra'];
    this.venta.forEach(element => {
      this.ChartVenta.push(element[1]);
      this.ChartDataV[0]['data'].push(element[0]);
    });
    this.compra.forEach(element => {
      this.ChartCompra.push(element[1]);
      this.ChartDataC[0]['data'].push(element[0]);
    });
  }
}
