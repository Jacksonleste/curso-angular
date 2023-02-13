import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/Cars';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {


  cars: Carro[] = []

  carDetails = '';

  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.getCars();
  }

  ShowYear(carro:Carro){
    this.carDetails = `O Veículo ${carro.fabricacao} ${carro.modelo} foi Fabricado no ano de ${carro.ano}`
  }

  removeCar(car:Carro){
    this.cars = this.listService.remove(this.cars, car)
  }

  getCars(){
    this.listService.getAll().subscribe((obj=>{
      this.cars = obj
    }));
  }

}
