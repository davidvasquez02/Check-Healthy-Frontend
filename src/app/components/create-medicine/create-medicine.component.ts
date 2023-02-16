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
  newMedicine: addMedicine= new addMedicine(0,'', 0, 0, '', 0, '','');
  type:String = '';
  idEUser:number = 0 ;
  hora:String='';

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
    this.createMedicine.fechaInicio=this.createMedicine.fechaInicio.substring(8,10)+'-' +this.createMedicine.fechaInicio.substring(5,7) + '-'+this.createMedicine.fechaInicio.substring(0,4)
    this.createMedicine.fechaInicio=this.createMedicine.fechaInicio+' '+ this.hora+':00'
    this.createMedicine.fechaFin=this.createMedicine.fechaInicio+'00:00:00'

    this.newMedicine = this.createMedicine;
    this.medicamentoService
      .create(this.newMedicine)
      .subscribe((response) => {
        console.log(response);
        if (this.createMedicine.nombre === response.nombre) {
          window.location.reload();
        }
      });
  }
}
