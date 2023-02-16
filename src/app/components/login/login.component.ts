import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials:UserCredentials = new UserCredentials("", "")

  constructor(private router: Router, private userService: UsuarioService){}

  iniciaSesion(){
    this.userService.inicioSesion(this.credentials.correo,this.credentials.contrasena).subscribe(response=>{
      console.log(response);
    })
  }

}
