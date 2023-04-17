import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'environments/environments';
import { Ipessoas } from 'interfaces/pessoas';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  getPessoas(){
    return this.http.get(`${API_PATH}pessoas`).toPromise()
  }

  postPessoas(pessoa: Ipessoas){
    return this.http.post<Ipessoas>(`${API_PATH}pessoas`, pessoa).toPromise()
  }

  deletePessoa(id : number){
    return this.http.delete(`${API_PATH}pessoas/${id}`).toPromise()
  }

}
