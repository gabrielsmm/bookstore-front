import { Observable } from 'rxjs';
import { Usuario } from './../models/usuario.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios/login`;
    return this.http.post<Usuario>(url, usuario);
  }
  
  registrar(usuario: Usuario){
    const url = `${this.baseUrl}/usuarios`;
    return this.http.post<Usuario>(url, usuario);
  }
}
