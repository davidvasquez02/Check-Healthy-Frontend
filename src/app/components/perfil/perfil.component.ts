import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent{
  user: User = new User();
  public editMode: Boolean = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUser(parseInt(sessionStorage.getItem('idUsuario')!))
      .subscribe((response) => {
        this.user = response;
      });
  }

  editUser() {
    this.editMode = true;
    this.userService.updateUser(this.user).subscribe((response) => {
      console.log(response);
      Swal.fire('Actualizado con Exito', '', 'success');
      setTimeout(() => {}, 1000);
      window.location.reload();
    });
  }

  closeEditUser() {
    window.location.reload();
  }
}
