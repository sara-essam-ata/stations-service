import { Component, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { SharedModule } from '../../../shared/shared.module';


Chart.register(...registerables);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit  {

  //radar chart
  @ViewChild('radarCanvas') radarCanvas!: ElementRef;

  ngAfterViewInit() {
    this.createRadarChart();
    this.createChart();
  }

  createRadarChart() {
    new Chart(this.radarCanvas.nativeElement, {
      type: 'radar' as ChartType,
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Series A',
            data: [65, 59, 90, 81, 56],
            backgroundColor: 'rgba(0, 203, 192, 0.2)',
            borderColor: 'rgb(0, 203, 192)',
            borderWidth: 1
          },
          {
            label: 'Series B',
            data: [28, 48, 40, 19, 96],
            backgroundColor: 'rgba(0, 154, 207, 0.2)',
            borderColor: 'rgb(0, 154, 207)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {  
            beginAtZero: true,
            suggestedMax: 100
          }
        }
      }
    });
  }

  //bar chart
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  createChart() {
    const chartConfig: ChartConfiguration<ChartType> = {
      type: 'bar', 
      data: {
        labels: ['Station Name1', 'Station Name1', 'Station Name1', 'Station Name1', 'Station Name1'], 
        datasets: [
          {
            label: 'My First Dataset',
            data: [100, 150, 200, 250, 300], 
            borderColor: 'rgba(75, 192, 192, 1)', 
            backgroundColor: 'rgb(255, 127, 92)',
            barThickness: 15,
            fill: true, 
            tension: 0.4, 
          },
        ],
      },
      options: {
        responsive: true, 
        scales: {
          y: {
            beginAtZero: true, 
          },
        },
      },
    };

    new Chart(this.chartCanvas.nativeElement, chartConfig);
  }
 
}
