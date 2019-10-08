import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class EX2Component implements OnInit {
 nom:string;//=prompt("votre nom");
 age:number;//=Number(prompt("votre age"));

  constructor() { }
min()
{
  if(this.age>18)
  {
    return false;
  }
  else 
    return true;
}
  ngOnInit() {
  }

}
