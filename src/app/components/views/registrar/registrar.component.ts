import { AppService } from './../../../app.service';
import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    username: '',
    email: '',
    senha: ''
  };

  constructor(private router: Router, private usuarioService: UsuarioService, private appService: AppService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.usuarioService.registrar(this.usuario).subscribe((resposta) => {
      this.appService.mensagem("Usuário registrado com sucesso!");
      this.limpaUsuario();
    }, err => {
      if(err.error.errors !== undefined){
        for(let i = 0; i < err.error.errors.length; i++){
          this.appService.mensagem(err.error.errors[i].message);
        }
      } else {
        this.appService.mensagem(err.error.error);
      }
    });
  }

  irParaLogin(){
    this.router.navigate(['login']);
  }

  limpaUsuario(){
    this.usuario.id = '';
    this.usuario.username = '';
    this.usuario.email = '';
    this.usuario.senha = '';
  }

}
