import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMap } from 'rxjs';
import { RegisterData } from 'src/app/models/register-data';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent {
  registerData: RegisterData = new RegisterData('','','',0,0,'',false,false,false);

  constructor(private afMessaging: AngularFireMessaging) { 
    this.getToken();
  }

  registraUsuario(){
    console.log(this.registerData)
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
 