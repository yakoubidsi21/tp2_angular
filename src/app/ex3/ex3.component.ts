import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
message:number;
somme:number;
  constructor() { }
onKeyUp(event:KeyboardEvent)
{
var in1=(<HTMLInputElement>event.target).value;
this.message=in1*in1;
}
calculsomme(in1:string,in2:string)
{
  this.somme=parseInt(in1)+parseInt(in2);
}

/*actif22()
{
    
  if (in1="")
  return false;
  else return true;
}*/
  ngOnInit() {
  }

}
