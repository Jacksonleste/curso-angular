import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  cars = [
    {model: "Uno", prod: "Fiat"},
    {model: "Gol", prod: "Volkswagen"},
    {model: "Santana", prod: "Volkswagen"},
    {model: "Ka", prod: "Ford"},
    {model: "Toro", prod: "Fiat"},
    {model: "Hilux", prod: "Toyota"},
    {model: "S10", prod: "Chavrolet"},
    {model: "Fox", prod: "Volkswagen"},
    {model: "Ranger", prod: "Ford"},
    {model: "Eco Sport", prod: "Ford"},
    {model: "Palio", prod: "Fiat"},
    {model: "Siena", prod: "Fiat"},
    {model: "Parati", prod: "Volkswagen"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
