import {Component, Input, OnInit} from '@angular/core';
import { ILineChartOptions, IChartistData } from 'chartist';
import { ChartType } from 'ng-chartist';

@Component({
  selector: 'app-widget-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() statColor = 'blue';
  @Input() title = '';
  @Input() desc = '';
  @Input() tooltipText = '';
  @Input() tooltipPlace = '';
  @Input() chart = {
    data: {
      series: [[6, 4, 8, 6, 5, 6, 7, 8, 1, 5, 9, 5]]
    },
    type: 'Bar',
    options: {
      height: '36px',
      width: '65px',
      showPoint: false,
      fullWidth: true,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      }
    }
  };
  // Chart
;

  constructor() {}

  ngOnInit() {
  }
}
