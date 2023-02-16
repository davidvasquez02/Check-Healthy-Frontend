import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DosisMedicamento } from '../models/dosisMedicamento';
import { TomaExaService } from './tomaExamen.service';

@Injectable({
  providedIn: 'root',
})
export class DosisMediService {
  url: string = `${environment.urlBack}/dosisMedicamento`;

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(
    private http: HttpClient
  ) {}

  getNotify(idUsuario: number): Observable<DosisMedicamento[]> {
    let params = new HttpParams();
    params = params.append('idUser', idUsuario);
    return this.http.get<DosisMedicamento[]>(this.url + '/allBefore', {
      headers: this.httpHeaders,
      params: params,
    });
  }

  getEstadisticas(idUsuario: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('idUser', idUsuario);
    return this.http.get<any>(this.url + '/estadisticas', {
      headers: this.httpHeaders,
      params: params,
    });
  }
}
