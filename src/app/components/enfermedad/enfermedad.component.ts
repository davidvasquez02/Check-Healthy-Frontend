import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DosisMedicamento } from 'src/app/models/dosisMedicamento';
import { ExamenUsuario } from 'src/app/models/examenUsuario';
import { MedicamentoUsuario } from 'src/app/models/medicamentoUsuario';
import { TomaExamen } from 'src/app/models/tomaExamen';
import { DosisMediService } from 'src/app/services/dosisMedi.service';
import { ExamenUserService } from 'src/app/services/examenUser.service';
import { MedicamentoUserService } from 'src/app/services/medicamentoUser.service';
import { TomaExaService } from 'src/app/services/tomaExamen.service';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.css']
})
export class EnfermedadComponent {
  tittle:String = ''; 
  type:String = '';
  idEUser:number = 0 ;
  medicamentos: MedicamentoUsuario[] = [];
  examenes: ExamenUsuario[] = [];
  dosisMedicamento: DosisMedicamento[] = [];
  tomaExamen: TomaExamen[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private medicamentoService: MedicamentoUserService,
    private examenService: ExamenUserService,
    private dosisMedService: DosisMediService,
    private tomaExaService: TomaExaService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params['id'];
      this.idEUser = params['eu'];
    })

    this.medicamentoService.getMedicamentos(this.idEUser).subscribe((response) => {
      this.medicamentos = response;
      console.log(response);
    });

    this.examenService.getExamenes(this.idEUser).subscribe((response) => {
      this.examenes = response;
      console.log(response);
    });

    this.dosisMedService.getNotify(this.idEUser).subscribe((response) => {
      this.dosisMedicamento = response;
      console.log(response);
    });

    this.tomaExaService.getNotify(this.idEUser).subscribe((response) => {
      this.tomaExamen = response;
      console.log(response);
    });

    if(this.type=='db'){
      this.tittle='Diabetes';
      // llamar a servicio y cargar info
      console.log('db')
    }
    
    if(this.type=='ht'){
      this.tittle='Hipertensión';
      // llamar a servicio y cargar info
      console.log('db')
    }
    
    if(this.type=='as'){
      this.tittle='Asma';
      // llamar a servicio y cargar info
      console.log('db')
    }

  }

}
