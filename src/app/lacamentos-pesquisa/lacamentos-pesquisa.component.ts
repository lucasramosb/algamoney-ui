import { Component, OnInit } from '@angular/core';
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LancamentosService } from 'services/lancamentos.service';

@Component({
  selector: 'app-lacamentos-pesquisa',
  templateUrl: './lacamentos-pesquisa.component.html',
  styleUrls: ['./lacamentos-pesquisa.component.css']
})
export class LacamentosPesquisaComponent implements OnInit {
  
  lancamentos: any = [] ; 

  constructor(private lancementosService: LancamentosService){
    
  }

  // function para passar resultado da requisição para o array lanacamentos
  getLancamentos(){
    this.lancementosService.getLancamentos()
    .then(lancamentos => {
      this.lancamentos = lancamentos
    })
  }

  //chamar lancamentos sempre que carregar o componente
  ngOnInit(){
    this.getLancamentos()
  }  

  faCoffee = faCoffee;
  faPen = faPen;
  faTrash = faTrash;

}
