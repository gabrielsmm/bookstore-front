import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(){
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta;
    });
  }

  delete(){
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.service.mensagem("Categoria deletada com sucesso!");
      this.router.navigate(['categorias']);
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }

  cancel(){
    this.location.back();
    // this.router.navigate(['categorias']);
  }
}
