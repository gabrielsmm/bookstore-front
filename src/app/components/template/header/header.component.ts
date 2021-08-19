import { Usuario } from './../../../models/usuario.model';
import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  usuario: Usuario = {
    id: '',
    username: '',
    email: '',
    senha: ''
  };

  ngOnInit(): void {
    this.usuario = this.appService.objUsuarioAutenticado;
  }

  sair(){
    this.appService.usuarioAutenticado = false;
    this.appService.objUsuarioAutenticado = {
      id: '',
      username: '',
      email: '',
      senha: ''
    };
    this.router.navigate(['login']);
  }

}
