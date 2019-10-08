import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haboubi',
  templateUrl: './haboubi.component.html',
  styleUrls: ['./haboubi.component.css']
})
export class HaboubiComponent implements OnInit {

  constructor() { }
nom:string ="iheb";
age:number = 20;
infos()
{ return this.nom +" a pour âge " + this.age; }


  ngOnInit() {
  }

}
