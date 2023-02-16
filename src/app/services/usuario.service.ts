import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = `${environment.urlBack}/api/usuario`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  inicioSesion(usuario: string, contraseña:string): Observable<number> {

    let params = new HttpParams();
    params = params.append('user', usuario);
    params = params.append('contraseña', contraseña);

    return this.http.get<number>(this.url  +'/inicioSesion', {headers:this.httpHeaders, params:params});
  }

}
