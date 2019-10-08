import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  constructor() { }
  in1:number;
  in2:number;
  produit:number;
oncalcule()
{
  
this.produit=(this.in1)*(this.in2);

}

  ngOnInit() {
  }

}
