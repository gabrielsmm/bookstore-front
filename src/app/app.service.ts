import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public usuarioAutenticado: boolean = false;

  constructor() { }
}
