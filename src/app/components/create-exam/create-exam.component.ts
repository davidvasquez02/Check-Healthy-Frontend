import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addExam } from 'src/app/models/addExam';
import { TipoFrecuencia } from 'src/app/models/tipoFrecuencia';
import { TipoMedida } from 'src/app/models/tipoMedida';
import { ExamenUserService } from 'src/app/services/examenUser.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css'],
})
export class CreateExamComponent {
  createExam: addExam = new addExam (0,'', 0, 0, '', 0, '','');

  type:String = '';
  idEUser:number = 0 ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private examenService: ExamenUserService
  ){}

  tipoFrecuencias: TipoFrecuencia[] = [
    { id: 1, nombre: 'Horas', multiplicador: 1 },
    { id: 2, nombre: 'Dias', multiplicador: 24 },
    { id: 3, nombre: 'Semanas', multiplicador: 168 },
    { id: 4, nombre: 'Meses', multiplicador: 730 },
  ];

  tipoMedidas: TipoMedida[] = [
    { id: 1, nombre: 'una', multiplicador: 1 },
    { id: 2, nombre: 'otra', multiplicador: 24 },
    { id: 3, nombre: 'otra', multiplicador: 168 },
    { id: 4, nombre: 'otra', multiplicador: 730 },
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params['id'];
      this.idEUser = params['eu'];
      this.createExam.idEnfermedadUsuario = this.idEUser;
    });
  }

  agregarExamen(): void {
    this.examenService
      .create(this.createExam)
      .subscribe((response) => {
        console.log(response);
        if (this.createExam.idEnfermedadUsuario === response.idEnfermedadUsuario) {
          window.location.reload();
        }
      });
  }
}
