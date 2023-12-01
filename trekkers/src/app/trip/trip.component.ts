import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

export interface PeriodicElement {
  day: number;
  activity: string;
  Traffic: string;
  Time: string;
  Height: string;
  Condition: string;
}
export interface MenuElement {
  breakfast: string;
  lunch: string;
  dinner: string;
}
const ELEMENT_MENU: MenuElement[]=[
  {breakfast: 'morning', lunch: 'skardu – askole', dinner: 'Jeep'},
]
const ELEMENT_DATA: PeriodicElement[] = [
  {day: 1, activity: 'skardu – askole', Traffic: 'Jeep', Time: '5-6hour', Height: '3050m', Condition:'Camp'},
  {day: 2, activity: 'askole – joule', Traffic: 'Trek', Time: '6-6hour', Height: '3218m', Condition:'Camp'},
  {day: 3, activity: 'joula – paju', Traffic: 'Trek', Time: '5-6hour', Height: '3218m', Condition:'Camp'},
  {day: 4, activity: 'Rest in Paiju', Traffic: 'Trek', Time: '2-6hour', Height: '4218m', Condition:'Camp'},
  {day: 5, activity: 'paju – khoburtse', Traffic: 'Trek', Time: '5-6hour', Height: '3218m', Condition:'Camp'},
  {day: 6, activity: 'khoburtse-urdukas', Traffic: 'Trek', Time: '3-6hour', Height: '3218m', Condition:'Camp'},
  {day: 7, activity: 'urdukas - goro2', Traffic: 'Trek', Time: '3-6hour', Height: '3218m', Condition:'Camp'},
  {day: 8, activity: 'goro2 – Concordia', Traffic: 'Trek', Time: '5-6hour', Height: '3218m', Condition:'Camp'},
  {day: 9, activity: 'Concordia', Traffic: 'Trek', Time: '2-6hour', Height: '3218m',  Condition:'Camp'},
  {day: 10, activity: 'Paiju– Julla', Traffic: 'Trek', Time: '5-6hour', Height: '3218m', Condition:'Camp'},
];
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
  
})
export class TripComponent implements OnInit {
  displayedColumns: string[] = ['day', 'activity', 'Traffic', 'Time','Height','Condition'];
  dataSource = ELEMENT_DATA;
  isClassActive: boolean = false;

  // Function to toggle the class
  toggleClass() {
    this.isClassActive = !this.isClassActive;
  }
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;
  createChart() {
    this.chart = new Chart("MyChart", {
      // type: 'pie',
      type: 'doughnut',
      data: {
        
        labels: [
          'Wheat',
          'Maize',
          'Rice',
          'Sugarcane',
          'Cotton'
        ],
        datasets: [{
          label: 'Area and Production of Important Crops (2020-21)',
          data: [9168.2, 1417.8, 3335.1, 1165.0, 2078.9],
          backgroundColor: [
            '#F7941D',
            '#262262',
            '#DA1C5C',
            '#39B54A',
            '#1B75BC'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          title: {
            display: false,
            text: '',
            font: {
              size: 20,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {  
            display: true,
            position: 'bottom',
            
            labels: {
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
            
          }
        }
      }
    });
  }
}
