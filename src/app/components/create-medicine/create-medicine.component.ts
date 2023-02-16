import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addMedicine } from 'src/app/models/addMedicine';
import { TipoDosis } from 'src/app/models/tipoDosis';
import { TipoFrecuencia } from 'src/app/models/tipoFrecuencia';
import { MedicamentoUserService } from 'src/app/services/medicamentoUser.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css'],
})
export class CreateMedicineComponent {
  createMedicine: addMedicine = new addMedicine(0,'', 0, 0, '', 0, '','');
  type:String = '';
  idEUser:number = 0 ;

  tipoFrecuencias: TipoFrecuencia[] = [
    { id: 1, nombre: 'Horas', multiplicador: 1 },
    { id: 2, nombre: 'Dias', multiplicador: 24 },
    { id: 3, nombre: 'Semanas', multiplicador: 168 },
    { id: 4, nombre: 'Meses', multiplicador: 730 },
  ];

  tipoDosis: TipoDosis[] = [
    { id: 1, nombre: 'Mg', multiplicador: 1 },
    { id: 2, nombre: 'Ml', multiplicador: 24 },
    { id: 3, nombre: 'otra', multiplicador: 168 },
    { id: 4, nombre: 'otra', multiplicador: 730 },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private medicamentoService: MedicamentoUserService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params['id'];
      this.idEUser = params['eu'];
      this.createMedicine.idEnfermedadUsuario = this.idEUser;
    });
  }

  agregarMedicamento(): void {
    this.medicamentoService
      .create(this.createMedicine)
      .subscribe((response) => {
        console.log(response);
        if (this.createMedicine.idEnfermedadUsuario === response.idEnfermedadUsuario) {
          window.location.reload();
        }
      });
  }
}
