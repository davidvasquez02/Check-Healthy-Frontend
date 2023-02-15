import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { CreateComentarioPubli } from 'src/app/models/create-comentario-publi';
import { CreatePublicacion } from 'src/app/models/createPublicacion';
import { Publicacion } from 'src/app/models/publicacion';
import { SeccionForo } from 'src/app/models/seccionForo';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { SeccionForoService } from 'src/app/services/seccionForo.service';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
import swal from 'sweetalert2';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
})
export class ForoComponent {
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  secciones: SeccionForo[] = [
    { id: 1, nombre: 'seccion1', descripcion: 'holi' },
    { id: 2, nombre: 'seccion2', descripcion: 'holi' },
  ];

  public comentarios: Comentario[] = [];
  public createComentario: CreateComentarioPubli = {
    idUsuario: 0,
    idPublicacion: 0,
    contenido: '',
    fecha: '',
  };

  public createPublicacion: CreatePublicacion = new CreatePublicacion();
  public publicaciones: Publicacion[][] = [];

  //{ id: 1, idSeccionForo: 1, contenido: 'holi',fecha: 'hoy', nombreUsuario: 'yo' },

  constructor(
    public publicacionService: PublicacionService,
    public comentarioService: ComentariosService
  ) {
    //var date = new Date();
    // var current_date =
    //   date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  // ngOnInit(): void {
  //   this.seccionService.getAllSeccion().subscribe((response) => {
  //     this.secciones = response;
  //     console.log(response);

  //     for(let e of this.secciones){
  //       this.publicacionService.getAllPublicacion(e.id).subscribe((response) => {
  //         this.publicaciones[e.id] = response;
  //         console.log(response);
  //       });
  //     }
  //   });
  // }

  // onTableDataChange(event: number) {
  //   this.page = event;
  // }

  // onTableSizeChange(event: { target: { value: number } }): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  // }

  // clickComentar(id: number): void {
  //   var date = new Date();
  //   var current_date =
  //     date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  //   this.createComentario.fecha = current_date;
  //   this.createComentario.idPublicacion = id;
  //   this.createComentario.idUsuario = parseInt(
  //     sessionStorage.getItem('idUsuario')!
  //   );
  //   console.log(this.createComentario);

  //   this.comentarioService.getCommentsPubli(id).subscribe((response) => {
  //     this.comentarios = response;
  //   });
  // }

  // creaComentario(): void {
  //   this.comentarioService
  //     .createCommentPubli(this.createComentario)
  //     .subscribe((response) => {
  //       console.log(response);
  //       if (this.createComentario.idUsuario === response.idUsuario) {
  //         window.location.reload();
  //       }
  //     });
  // }

  // publicar(seccion:number){
  //   this.createPublicacion.idSeccionForo = seccion
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = today.getFullYear();
  //   this.createPublicacion.fecha = dd + '-' + mm + '-' + yyyy;
  //   this.createPublicacion.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!)

  //   console.log(this.createPublicacion)

  //   this.publicacionService.create(this.createPublicacion).subscribe((response)=>{
  //     console.log(response)
  //     swal.fire('Actualizado con Exito', '', 'success');
  //     setTimeout(() => {
  //     }, 1000);
  //     window.location.reload();

  //   })
  // }
}
