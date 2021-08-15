import { Router } from '@angular/router';
import { Categoria } from './../../categoria/categoria.model';
import { CategoriaService } from './../../categoria/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read-categoria',
  templateUrl: './livro-read-categoria.component.html',
  styleUrls: ['./livro-read-categoria.component.css']
})
export class LivroReadCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.categoriaService.findAll().subscribe(resposta => {
      this.categorias = resposta;
    });
  }

  irParaLivros(id: any){
    this.router.navigate([`categorias/${id}/livros`]);
  }

}
