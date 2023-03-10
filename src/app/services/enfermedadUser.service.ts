import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CreatePublicacion } from '../models/createPublicacion';
import { EnfermedadUser } from '../models/enfermedadUser';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadUserService {

  url:string = `${environment.urlBack}/enfermedadUsuario`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getAllEnfermedades(idUsuario:number): Observable<EnfermedadUser[]> {
    let params = new HttpParams();
    params = params.append('idUser', idUsuario);
    return this.http.get<EnfermedadUser[]>(this.url  +'/allByUser', {headers:this.httpHeaders, params:params});
  }

  create(create: CreatePublicacion): Observable<any>{
    return this.http.post<any>(this.url,create, {headers:this.httpHeaders});
  }

  update(enfermedadUser:EnfermedadUser): Observable<EnfermedadUser> {
    return this.http.put<EnfermedadUser>(this.url , enfermedadUser , {headers:this.httpHeaders});
  }
}