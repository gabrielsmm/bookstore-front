import { LoaderService } from './../../../template/loader/loader.service';
import { CategoriaService } from './../../categoria/categoria.service';
import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  livros: Livro[] = [];
  id_cat: string = "";
  public nome_cat: string = "";

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router,
    private categoriaService: CategoriaService, public loaderService: LoaderService) {
      router.events.subscribe((resposta) => {
        this.buscarLivros();
      })
     }

  ngOnInit(): void {
    this.buscarLivros();
  }

  buscarLivros(){
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findCategoria();
    this.findAllByCategoria();
  }

  findAllByCategoria(){
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
    });
  }

  findCategoria(){
    this.categoriaService.findById(this.id_cat).subscribe((resposta) => {
      this.nome_cat = resposta.nome;
    })
  }
}
