import { Component } from '@angular/core';
import { RegisterData } from 'src/app/models/register-data';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent {
  registerData: RegisterData = new RegisterData('','','',0,0,'',false,false,false);

  registraUsuario(){
    console.log(this.registerData)
  }
}
 