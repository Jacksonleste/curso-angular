import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Jackson';
  age: number = 19;
  job = 'Programador';
  hobbies = ['Jogar', 'Cinema', 'Estudar'];
  car = {
    name: "porshe",
    year: "2015"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
