import { Component } from '@angular/core';
import { UserCredentials } from 'src/app/models/user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials:UserCredentials = new UserCredentials("", "")

}
