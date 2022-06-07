import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size = '22px';
  font = 'monospace'
  color = 'blue'

  classes = ['red-title', 'big-title']

  dash = 'dash'


  constructor() { }

  ngOnInit(): void {
  }

}
