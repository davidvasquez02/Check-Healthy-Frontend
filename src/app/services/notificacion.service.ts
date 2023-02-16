import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';
import { environment } from 'src/environments/environment.prod';
import { Notificaciones } from '../models/notificaciones';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  url:string = `${environment.urlBack}/publicacion`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getAllNotificaciones(idSeccion:number): Observable<Notificaciones[]> {
    let params = new HttpParams();
    params = params.append('idSeccion', idSeccion);
    return this.http.get<Notificaciones[]>(this.url  +'/all', {headers:this.httpHeaders, params:params});
  }

}