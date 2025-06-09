import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-histogram',
  imports: [],
  templateUrl: './histogram.html',
  styleUrl: './histogram.scss',
})
export class Histogram implements OnInit {
  private chart: any;

  ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    this.chart = echarts.init(
      document.getElementById('histogram') as HTMLDivElement
    );

    const option = {
      title: {
        text: 'Office Registrar',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Count',
          type: 'bar',
          data: [12, 19, 3, 5, 2, 3],
          itemStyle: {
            color: '#3398DB',
          },
        },
      ],
    };

    this.chart.setOption(option);
  }
}
