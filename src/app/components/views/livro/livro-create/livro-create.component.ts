import { CategoriaService } from './../../categoria/categoria.service';
import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  id_cat: string = "";
  public nome_cat: string = "";

  livro: Livro = {
    titulo: '',
    nomeAutor: '',
    texto: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: LivroService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findCategoria();
  }

  create(){
    this.service.create(this.id_cat, this.livro).subscribe((resposta) => {
      this.service.mensagem("Livro criado com sucesso!");
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message);
      }
    });
  }

  cancel(){
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findCategoria(){
    this.categoriaService.findById(this.id_cat).subscribe((resposta) => {
      this.nome_cat = resposta.nome;
    })
  }
}
