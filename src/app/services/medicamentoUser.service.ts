import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { addMedicine } from '../models/addMedicine';
import { MedicamentoUsuario } from '../models/medicamentoUsuario';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoUserService {

  url:string = `${environment.urlBack}/medicamentoUsuario`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getMedicamentos(idUsuario:number): Observable<MedicamentoUsuario[]> {
    let params = new HttpParams();
    params = params.append('idEnfermedadUsuario', idUsuario);
    return this.http.get<MedicamentoUsuario[]>(this.url  +'/id', {headers:this.httpHeaders, params:params});
  }

  getNotify(idUsuario:number): Observable<MedicamentoUsuario[]> {
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    return this.http.get<MedicamentoUsuario[]>(this.url  +'/idUsuario', {headers:this.httpHeaders, params:params});
  }

  create(create: addMedicine): Observable<any>{
    return this.http.post<any>(this.url,create, {headers:this.httpHeaders});
  }

}