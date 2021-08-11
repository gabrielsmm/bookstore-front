import { Livro } from './livro.model';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: string): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }

  findById(id: string): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Livro>(url);
  }

  create(id_cat:string, livro: Livro): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.http.post<Livro>(url, livro);
  }

  update(livro: Livro): Observable<void>{
    const url = `${this.baseUrl}/livros/${livro.id}`;
    return this.http.put<void>(url, livro);
  }

  delete(id: string): Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: string){
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
