import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Check-Health';

  constructor(private afMessaging: AngularFireMessaging) { 
    this.getToken();
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
