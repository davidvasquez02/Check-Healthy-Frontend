import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //credentials:UserCredentials = new UserCredentials("", "")

  isLogin: Boolean = false;

  actualCredentials: User = new User();

  private user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
    if (sessionStorage.getItem('correo')) {
      this.router.navigate(['home/inicio']);
    }
  }

  public login(): void {
    this.userService
      .validateUser(
        this.actualCredentials.correo,
        this.actualCredentials.contrasena,
        localStorage.getItem('token')!
      )
      .subscribe((response) => {
        this.user = response;
        if (this.validate(this.user)) {
          Swal.fire('Bienvenido', '', 'success');
          setTimeout(() => {
            this.router.navigate(['home/inicio']);
          }, 1000);
        } else {
          Swal.fire('Credenciales invalidas', '', 'error');
        }
      });
  }

  private validate(userInfo: User): Boolean {
    console.log(this.actualCredentials.correo);
    console.log(userInfo);
    console.log(this.actualCredentials);

    if (userInfo === null) {
      return false;
    } else if (
      this.actualCredentials.correo === userInfo.correo &&
      this.actualCredentials.contrasena === userInfo.contrasena
    ) {
      sessionStorage.setItem('correo', this.actualCredentials.correo);
      sessionStorage.setItem('idUsuario', userInfo.id + '');
      return true;
    } else {
      return false;
    }
  }
}
