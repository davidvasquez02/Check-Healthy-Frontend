import { Component } from '@angular/core';
import { Notificaciones } from 'src/app/models/notificaciones';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css'],
})
export class NotificacionesComponent {
  public notificaciones: Notificaciones[] = [
    {
      id: 1,
      titulo: 'Medicina',
      fechaHora: 'hoy a las 5',
      descripcion: 'tomarla',
    },
    {
      id: 2,
      titulo: 'Medicina',
      fechaHora: 'hoy a las 7',
      descripcion: 'tomarla',
    },
  ];

  constructor(public notificacionService: NotificacionService) {}
}
