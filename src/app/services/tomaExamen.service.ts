import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TomaExamen } from '../models/tomaExamen';

@Injectable({
  providedIn: 'root'
})
export class TomaExaService {

  url:string = `${environment.urlBack}/tomaExamen`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getNotify(idUsuario:number):Observable<TomaExamen[]>{
    let params = new HttpParams();
    params = params.append('idUser', idUsuario);
    return this.http.get<TomaExamen[]>(this.url+'/allBefore', {headers:this.httpHeaders, params:params});
  }

  setCheck(tomaExamen: TomaExamen): Observable<TomaExamen> {
    return this.http.put<TomaExamen>(this.url, tomaExamen,{
      headers: this.httpHeaders
    });
  }
}