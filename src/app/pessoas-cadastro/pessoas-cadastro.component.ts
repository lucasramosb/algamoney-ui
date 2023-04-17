import { Component } from '@angular/core';
import { PessoasService } from 'services/pessoas.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent {

  constructor(private pessoasService: PessoasService){

  }

  adicionar(nome: string, cidade: string, estado: string){
    this.pessoasService.postPessoas({nome: nome, cidade: cidade, estado: estado})
    .then(()=> console.log(nome, cidade, estado))
  }

}
