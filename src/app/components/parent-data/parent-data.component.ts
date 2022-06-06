import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name: String = '';

  @Input() userData! :{
    age: Number,
    email: String,
    charge: String
  }

  constructor() { }

  ngOnInit(): void {
  }

}
