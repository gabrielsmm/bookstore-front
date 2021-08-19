import { UsuarioService } from './../../../services/usuario.service';
import { AppService } from './../../../app.service';
import { Router } from '@angular/router';
import { Usuario } from './../../../models/usuario.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    username: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService, private service: LoginService, private appService: AppService, private router: Router) { }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.usuarioService.login(this.usuario).subscribe((resposta) => {
      this.appService.usuarioAutenticado = true;
      this.appService.objUsuarioAutenticado = resposta;
      this.router.navigate(['home']);
    }, err => {
      if(err.error.errors !== undefined){
        for(let i = 0; i < err.error.errors.length; i++){
          this.service.mensagem(err.error.errors[i].message);
        }
      } else {
        this.service.mensagem("Usuário ou senha incorretos!");
      }
    });
  }

  irParaRegistrar(){
    this.router.navigate(['registrar']);
  }

}
