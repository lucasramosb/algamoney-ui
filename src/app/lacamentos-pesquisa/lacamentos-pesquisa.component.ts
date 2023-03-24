import { Component } from '@angular/core';
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lacamentos-pesquisa',
  templateUrl: './lacamentos-pesquisa.component.html',
  styleUrls: ['./lacamentos-pesquisa.component.css']
})
export class LacamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de Pães', dataVencimento: '30/12/2022', dataPagamento: null, valor: 4.45, pessoa: 'Padaria do Jose'},
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '28/02/2023', dataPagamento: '26/02/2023', valor: 8000, pessoa: 'Data sotware'},
    {tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '21/01/2022', dataPagamento: null, valor: 143125, pessoa: 'Ministerio da Fazenda'},
    {tipo: 'DESPESA', descricao: 'Mensalidade da Escola', dataVencimento: '05/02/2023', dataPagamento: '12/04/2023', valor: 800, pessoa: 'Escolha Magalhães'},
    {tipo: 'RECEITA', descricao: 'Venda de Carro', dataVencimento: '16/04/2022', dataPagamento: null, valor: 55000, pessoa: 'Lucas Ramos'},
    {tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '12/03/2022', dataPagamento: '11/03/2022', valor: 1750, pessoa: 'Casa Nova Imoveis'},
    {tipo: 'DESPESA', descricao: 'Academia', dataVencimento: '05/04/2022', dataPagamento: null, valor: 150, pessoa: 'Academia Top'}
  ] ; 

  faCoffee = faCoffee;
  faPen = faPen;
  faTrash = faTrash;

}
