import { Component, OnInit } from '@angular/core';
import { EnfermedadUser } from 'src/app/models/enfermedadUser';
import { EnfermedadUserService } from 'src/app/services/enfermedadUser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enfermedades: EnfermedadUser[] = [];
  enfermedadUpdate: EnfermedadUser = new EnfermedadUser();

  constructor(
    public enfermedadUserService: EnfermedadUserService
  ) {}

  ngOnInit(): void {
    this.enfermedadUserService.getAllEnfermedades(parseInt(sessionStorage.getItem('idUsuario')!)).subscribe((response) => {
      this.enfermedades = response;
      console.log(response);

      for (let e of this.enfermedades) {
        if(e.idEnfermedad === 1 ){
          e.route = '../control/db/' + e.id;
        }else if(e.idEnfermedad === 2 ){
          e.route = '../control/ht/' + e.id;
        }else if(e.idEnfermedad === 3 ){
          e.route = '../control/as/' + e.id;
        };
        console.log(e.route);
      }

      console.log(this.enfermedades);
      
    });
  }

  preguntaEnfermedad(e:EnfermedadUser){
    Swal.fire({
      title: 'Quieres habilitar seguimiento a esta enfermedad?',     
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.enfermedadUpdate = e;
        this.enfermedadUpdate.padece=true;
        this.enfermedadUserService.update(this.enfermedadUpdate).subscribe((response)=>{
          console.log(response)
        })
        Swal.fire(
          '!',
          'Has activado el seguimiento!.',
          'success'
        )
      }
    })
    
  }

}
