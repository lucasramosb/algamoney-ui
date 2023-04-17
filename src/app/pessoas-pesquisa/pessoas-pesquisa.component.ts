import { Component, OnInit } from '@angular/core';
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PessoasService } from 'services/pessoas.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  constructor(private pessoasService: PessoasService){}
  
  pessoas: any = [] ;
  
  getPessoas(){
    this.pessoasService.getPessoas()
    .then(pessoas => {
      this.pessoas = pessoas
    })
  };

  ngOnInit(): void {
    this.getPessoas()
  }

  excluir(id: number){
    this.pessoasService.deletePessoa(id)
    .then(() => this.getPessoas())
  }


  faCoffee = faCoffee;
  faPen = faPen;
  faTrash = faTrash;

}
