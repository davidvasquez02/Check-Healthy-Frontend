import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica-examenes',
  templateUrl: './grafica-examenes.component.html',
  styleUrls: ['./grafica-examenes.component.css']
})
export class GraficaExamenesComponent {

  chartData = [
    {
      data: [330,600,2560,426],
      label: 'toma'
    },
    {
      data: [330,600,2560,426],
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
