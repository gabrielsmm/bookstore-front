import { Usuario } from './models/usuario.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public usuarioAutenticado: boolean = false;

  public objUsuarioAutenticado: Usuario = {
    id: '',
    username: '',
    email: '',
    senha: ''
  };

  constructor(private _snack: MatSnackBar, private location: Location) { }

  mensagem(str: string){
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  goBack(){
    this.location.back();
  }
}
