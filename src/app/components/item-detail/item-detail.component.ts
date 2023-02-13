import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/Cars';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  carro?: Carro

  constructor( private listService: ListService,
               private route: ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.getCar()
  }

  getCar(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((item)=>{
      this.carro = item;
      console.log("Here!")
    });
  }

}
