import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RegisterData } from '../models/register-data';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User();
  
  url:string = `${environment.urlBack}/usuario`;

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  validateUser(correo: string , contraseña:string, token:string):Observable<User>{
    let params = new HttpParams();
    params = params.append('correo', correo);
    params = params.append('contraseña', contraseña);
    params = params.append('token', token)
    return this.http.get<User>(this.url + "/inicioSesion",{headers:this.httpHeaders, params:params});
  }

  createUser(data: RegisterData):Observable<any>{
    return this.http.post<any>(this.url,data,{headers:this.httpHeaders});
  }

  getUser(idUsuario: number):Observable<User>{
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    return this.http.get<any>(this.url + "/id",{headers:this.httpHeaders, params:params});
  }

  updateUser(user: User):Observable<any>{
    return this.http.put<any>(this.url,user,{headers:this.httpHeaders});
  }


}