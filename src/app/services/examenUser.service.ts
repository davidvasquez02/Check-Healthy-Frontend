import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { addExam } from '../models/addExam';
import { ExamenUsuario } from '../models/examenUsuario';

@Injectable({
  providedIn: 'root'
})
export class ExamenUserService {

  url:string = `${environment.urlBack}/examenUsuario`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getExamenes(idUsuario:number): Observable<ExamenUsuario[]> {
    let params = new HttpParams();
    params = params.append('idEnfermedadUsuario', idUsuario);
    return this.http.get<ExamenUsuario[]>(this.url  +'/id', {headers:this.httpHeaders, params:params});
  }

  create(create: addExam): Observable<any>{
    return this.http.post<any>(this.url,create, {headers:this.httpHeaders});
  }

}