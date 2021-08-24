import { PagenotfoundComponent } from './components/views/pagenotfound/pagenotfound.component';
import { RegistrarComponent } from './components/views/registrar/registrar.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/views/login/login.component';
import { LivroReadCategoriaComponent } from './components/views/livro/livro-read-categoria/livro-read-categoria.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'categorias', component: CategoriaReadComponent, canActivate: [AuthGuard], children: [
    {path: 'create', component: CategoriaCreateComponent},
    {path: 'delete/:id', component: CategoriaDeleteComponent},
    {path: 'update/:id', component: CategoriaUpdateComponent},
    {path: ':id_cat/livros', component: LivroReadAllComponent},
    {path: ':id_cat/livros/create', component: LivroCreateComponent},
    {path: ':id_cat/livros/update/:id_livro', component: LivroUpdateComponent},
    {path: ':id_cat/livros/delete/:id_livro', component: LivroDeleteComponent},
    {path: ':id_cat/livros/read/:id_livro', component: LivroReadComponent}
  ]},
  {path: 'livros', component: LivroReadCategoriaComponent, canActivate: [AuthGuard], children: [
    {path: 'categoria/:id_cat', component: LivroReadAllComponent},
    {path: 'categoria/:id_cat/create', component: LivroCreateComponent},
    {path: 'categoria/:id_cat/update/:id_livro', component: LivroUpdateComponent},
    {path: 'categoria/:id_cat/delete/:id_livro', component: LivroDeleteComponent},
    {path: 'categoria/:id_cat/read/:id_livro', component: LivroReadComponent}
  ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
