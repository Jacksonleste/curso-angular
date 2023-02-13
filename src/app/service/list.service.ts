import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Carro } from '../Cars';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  remove(cars:Carro[], car:Carro){
    return cars.filter((a)=> a.modelo !== car.modelo)
  }

  getAll(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.apiUrl)
  }

  getItem(id:number): Observable<Carro>{
    return this.http.get<Carro>(`${this.apiUrl}/${id}`)
  }
}
