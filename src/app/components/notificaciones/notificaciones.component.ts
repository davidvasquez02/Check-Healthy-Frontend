import { Component } from '@angular/core';
import { DosisMedicamento } from 'src/app/models/dosisMedicamento';
import { TomaExamen } from 'src/app/models/tomaExamen';
import { DosisMediService } from 'src/app/services/dosisMedi.service';
import { ExamenUserService } from 'src/app/services/examenUser.service';
import { MedicamentoUserService } from 'src/app/services/medicamentoUser.service';
import { TomaExaService } from 'src/app/services/tomaExamen.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css'],
})
export class NotificacionesComponent {
  dosisMedicamento: DosisMedicamento[] = [];
  tomaExamen: TomaExamen[] = [];

  dosisMedi: DosisMedicamento = new DosisMedicamento;
  tomaExa: TomaExamen = new TomaExamen;

  constructor(
    private medicamentoService: MedicamentoUserService,
    private dosisMedService: DosisMediService,
    private tomaExaService: TomaExaService,
    private examenService: ExamenUserService
  ) {}

  ngOnInit(): void {
    this.dosisMedService
      .getNotify(parseInt(sessionStorage.getItem('idUsuario')!))
      .subscribe((response) => {
        this.dosisMedicamento = response;
        console.log(response);
      });

    this.tomaExaService
      .getNotify(parseInt(sessionStorage.getItem('idUsuario')!))
      .subscribe((response) => {
        this.tomaExamen = response;
        console.log(response);
      });
  }

  setCheckkDosis(idDosis:number){
    this.dosisMedi = this.dosisMedicamento[idDosis];
    this.dosisMedi.checkk=true;
    this.dosisMedService
      .setCheck(this.dosisMedi)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }

  setCheckkExa(idExa:number){
    this.tomaExa = this.tomaExamen[idExa];
    this.tomaExa.checkk=true;
    this.tomaExaService
      .setCheck(this.tomaExa)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }
}
