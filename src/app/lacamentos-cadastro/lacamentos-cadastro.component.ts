import { Component } from '@angular/core';

@Component({
  selector: 'app-lacamentos-cadastro',
  templateUrl: './lacamentos-cadastro.component.html',
  styleUrls: ['./lacamentos-cadastro.component.css']
})
export class LacamentosCadastroComponent {


  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte',  value: 2}
  ]
  pessoas = [
    {label: 'João da Silva', value: 1},
    {label: 'Maria de Souza',  value: 2},
    {label: 'Carol dos Santos',  value: 3},
  ]
}
