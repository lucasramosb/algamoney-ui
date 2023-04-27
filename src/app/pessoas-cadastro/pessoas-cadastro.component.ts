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

  // postar(nome: string,idade: number, cidade: string, estado: string, email: string, celular: number){
  //   console.log(nome, idade, cidade, estado, email, celular)
  // }

  postar(nome: string, idade: number, cidade: string, estado: string, email: string, celular: number){
    this.pessoasService.postPessoas({nome: nome, idade: idade, cidade: cidade, estado: estado, email: email, celular: celular})
    .then(()=> console.log(nome, cidade, estado))
  }

}
