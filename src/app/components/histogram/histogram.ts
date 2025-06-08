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
        text: 'Sample Histogram',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Bin 1', 'Bin 2', 'Bin 3', 'Bin 4', 'Bin 5', 'Bin 6'],
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
