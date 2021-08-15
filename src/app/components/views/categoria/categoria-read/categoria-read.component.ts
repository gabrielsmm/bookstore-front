import { LoaderService } from './../../../template/loader/loader.service';
import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  usingForm: boolean = false;
  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  constructor(private service: CategoriaService, private router: Router, public loaderService: LoaderService,
    private changeDetector : ChangeDetectorRef) {
    }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta;
    });
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"]);
  }

  onActivate(component: any) {
    this.usingForm = true;
  }
  
  onDeactivate(component: any) {
    this.findAll();
    this.usingForm = false;
  }

}
