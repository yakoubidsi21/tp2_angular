import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  constructor() { }
produit()
{
  var in1=(<HTMLInputElement>event.target).value;
  var in2=(<HTMLInputElement>event.target).value;
  
}

  ngOnInit() {
  }

}
