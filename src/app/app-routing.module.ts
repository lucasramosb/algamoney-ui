import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacamentosPesquisaComponent } from './lacamentos-pesquisa/lacamentos-pesquisa.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { LacamentosCadastroComponent } from './lacamentos-cadastro/lacamentos-cadastro.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: 'lancamentos-pesquisa', pathMatch: 'full'},
  {path: 'lancamentos-pesquisa', component: LacamentosPesquisaComponent},
  {path: 'pessoas-pesquisa', component: PessoasPesquisaComponent },
  {path: 'lancamentos-cadastro', component: LacamentosCadastroComponent},
  {path: 'pessoas-cadastro', component: PessoasCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
