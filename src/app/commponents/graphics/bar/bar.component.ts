import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  public ChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Path 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Path 2' },
  ];
  public ChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  

  public ChartColors: Array<any> = [
    { // Golden
      backgroundColor: '#F1E7B6',
      borderColor: '#D6C15A',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public ChartLegend = true;
  public ChartType = 'bar';
  public ChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

}
