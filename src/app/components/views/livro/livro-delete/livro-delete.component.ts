import { LivroService } from './../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  id_cat: string = "";

  livro: Livro = {
    id: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: LivroService) { }

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

  delete(){
    this.service.delete(this.livro.id!).subscribe((resposta) => {
      this.service.mensagem("Livro deletado com sucesso!");
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }

  cancel(){
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

}
