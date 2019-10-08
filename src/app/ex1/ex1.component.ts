import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

nom:string="Operations sur un tableau"
  constructor() { }
tabnb=[41,18,23,58];

min()
{
 let m:number=this.tabnb[0];
for (let i=0;i<this.tabnb.length;i++)
{
  if (m>this.tabnb[i])
  m=this.tabnb[i];
}
return m;
}
moy()
{
 let m:number=0;
for (let i=0;i<this.tabnb.length;i++)
{
  
  m=this.tabnb[i]+m;
}
m=m/this.tabnb.length;
return m;
}
  ngOnInit() {
  }

}
