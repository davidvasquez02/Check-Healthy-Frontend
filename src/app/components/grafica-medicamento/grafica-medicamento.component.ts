import { Component } from '@angular/core';
import { DosisMediService } from 'src/app/services/dosisMedi.service';

@Component({
  selector: 'app-grafica-medicamento',
  templateUrl: './grafica-medicamento.component.html',
  styleUrls: ['./grafica-medicamento.component.css']
})
export class GraficaMedicamentoComponent {

  constructor(
    private dosisMedService: DosisMediService
  ) {}

  lista: any;

  ngOnInit(): void {
    this.dosisMedService.getEstadisticas(parseInt(
      sessionStorage.getItem('idUsuario')!)).subscribe((response: any) => {
      console.log(response);
      this.lista=response;
    });
  }

  chartData = [
    {
      data: [14,15,4,17],
      label: 'toma'
    },
    {
      data: [6,5,16,3],
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
