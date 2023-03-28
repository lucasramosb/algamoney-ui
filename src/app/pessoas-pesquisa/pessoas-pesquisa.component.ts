import { Component } from '@angular/core';
import { faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Jose Amilton', cidade: 'Uberlandia', estado: 'MG', status: true },
    {nome: 'Manoel Pinheiro', cidade: 'São Paulo', estado: 'SP', status: false },
    {nome: 'Luis Pereira', cidade: 'Florianopolis', estado: 'SC', status: false },
    {nome: 'Vilmar Andrade', cidade: 'Curitiba', estado: 'PR', status: true },
    {nome: 'Carla Souza', cidade: 'Rio de Janeiro', estado: 'RJ', status: false },
    {nome: 'Clara Lima', cidade: 'Belo Horizonte', estado: 'MG', status: true },
    {nome: 'Nicolas Almeida', cidade: 'Porto Seguro', estado: 'BA2', status: true }
  ] ; 

  faCoffee = faCoffee;
  faPen = faPen;
  faTrash = faTrash;

}
