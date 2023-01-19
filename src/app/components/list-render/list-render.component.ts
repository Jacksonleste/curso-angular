import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/Cars';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {


  cars: Carro[] = [
    {modelo: "Uno", fabricacao: "Fiat", ano: 2021,},
    {modelo: "Gol", fabricacao: "Volkswagen", ano: 2004},
    {modelo: "Santana", fabricacao: "Volkswagen", ano: 2003},
    {modelo: "Ka", fabricacao: "Ford", ano: 2005},
    {modelo: "Toro", fabricacao: "Fiat", ano: 2018},
    {modelo: "Hilux", fabricacao: "Toyota", ano: 2012},
    {modelo: "S10", fabricacao: "Chavrolet", ano: 2006},
    {modelo: "Fox", fabricacao: "Volkswagen", ano: 2012},
    {modelo: "Ranger", fabricacao: "Ford", ano: 2013},
    {modelo: "Eco Sport", fabricacao: "Ford", ano: 2020},
    {modelo: "Palio", fabricacao: "Fiat", ano: 2015},
    {modelo: "Siena", fabricacao: "Fiat", ano: 2022},
    {modelo: "Parati", fabricacao: "Volkswagen", ano: 2001},
  ]

  carDetails = '';

  constructor(private listService:ListService) { }

  ngOnInit(): void {
  }

  ShowYear(carro:Carro){
    this.carDetails = `O Veículo ${carro.fabricacao} ${carro.modelo} foi Fabricado no ano de ${carro.ano}`
  }

  removeCar(car:Carro){
    this.cars = this.listService.remove(this.cars, car)
  }

}
