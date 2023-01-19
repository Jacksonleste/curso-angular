import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Carro } from '../Cars';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(cars:Carro[], car:Carro){
    return cars.filter((a)=> a.modelo !== car.modelo)
  }
}
