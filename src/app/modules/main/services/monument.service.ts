import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from 'src/app/util/constants';

const getList = Constantes.apiUrl+'.json?rows=2'

@Injectable({
  providedIn: 'root',
})
export class MonumentService {
  constructor(private http: HttpClient) { }

  getMonumentById(id: number) {
    return this.http.get(`${Constantes.apiUrl}/${id}.json`)
  }

  getMonumentList() {
    return this.http.get<any>(getList)
  }
}
