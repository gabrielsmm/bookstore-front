import { LivroService } from './../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {
  id_cat: string = "";

  livro: Livro = {
    id: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: LivroService, private location: Location) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id_livro')!;
    this.findById();
  }

  findById(){
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    })
  }

  cancel(){
    this.location.back();
    // this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

}
