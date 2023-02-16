import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenUsuario } from 'src/app/models/examenUsuario';
import { MedicamentoUsuario } from 'src/app/models/medicamentoUsuario';
import { ExamenUserService } from 'src/app/services/examenUser.service';
import { MedicamentoUserService } from 'src/app/services/medicamentoUser.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private medicamentoService: MedicamentoUserService,
    private examenService: ExamenUserService
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
