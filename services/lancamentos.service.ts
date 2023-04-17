import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'environments/environments';
import { Ilancamentos } from 'interfaces/lancamentos';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(private http: HttpClient) { }

  getLancamentos(){
    return this.http.get<Ilancamentos[]>(`${API_PATH}lancamentos`)
    .toPromise()
  };

}
