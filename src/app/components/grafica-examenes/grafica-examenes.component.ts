import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica-examenes',
  templateUrl: './grafica-examenes.component.html',
  styleUrls: ['./grafica-examenes.component.css']
})
export class GraficaExamenesComponent {
  title = 'chartAngular'

  chartData = [
    {
      data: [330,600,2560,426,586,256,789],
      label: 'toma'
    },
    {
      data: [330,600,2560,426,586,256,789],
      label: 'No toma'
    }
  ];

  chartLabels = [
    'Enero','Febrero','Marzo','Abril'
  ];

  chartOptions = {
    responsive: true
  };

}