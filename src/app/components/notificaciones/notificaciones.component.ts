import { Component } from '@angular/core';
import { DosisMedicamento } from 'src/app/models/dosisMedicamento';
import { TomaExamen } from 'src/app/models/tomaExamen';
import { ExamenUserService } from 'src/app/services/examenUser.service';
import { MedicamentoUserService } from 'src/app/services/medicamentoUser.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css'],
})
export class NotificacionesComponent {

  dosisMedicamento: DosisMedicamento[] = [];
  tomaExamenes: TomaExamen[] = [];
  constructor(private medicamentoService: MedicamentoUserService,
    private examenService: ExamenUserService) {}

    ngOnInit(): void {
  
      // this.medicamentoService.getNotify(parseInt(sessionStorage.getItem('idUsuario')!)).subscribe((response) => {
      //   this.medicamentos = response;
      //   console.log(response);
      // });
  
      // this.examenService.getNotify(parseInt(sessionStorage.getItem('idUsuario')!)).subscribe((response) => {
      //   this.examenes = response;
      //   console.log(response);
      // });
  
    }
}
