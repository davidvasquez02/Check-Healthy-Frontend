import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { RegisterData } from 'src/app/models/register-data';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent {
  registerData: RegisterData = new RegisterData('','','', '',0,0,'',false,false,false);

  registerDataResponse: RegisterData = new RegisterData('','','', '',0,0,'',false,false,false);


  constructor(private afMessaging: AngularFireMessaging, private router: Router, private userService: UserService) { 
    this.getToken();
  }

  registraUsuario(){
    console.log(this.registerData)
    this.userService.createUser(this.registerData).subscribe((response)=>{
      this.registerDataResponse = response;
      if(this.registerDataResponse.nombre === this.registerData.nombre){
        Swal.fire('Registro completado con Exito!', '', 'success');
        setTimeout(() => {
          sessionStorage.clear();
          this.router.navigate(['login']);
        }, 1000);
        

      } else {
        Swal.fire('Ocurrio un problema', '', 'error');
      }
    })
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMap(() => (this.afMessaging.tokenChanges)))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },  
      );
  }

  getToken(){
    this.afMessaging.getToken.subscribe((res) => console.log('Token: ',res));
  }
}
 