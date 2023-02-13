import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegiterComponent } from './components/regiter/regiter.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { firebase } from '../environments/firebase';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
