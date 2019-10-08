import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HaboubiComponent } from './haboubi/haboubi.component';
import { Ex1Component } from './ex1/ex1.component';
import { P2Component } from './p2/p2.component';
import { EX2Component } from './ex2/ex2.component';
import { P3Component } from './p3/p3.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';

@NgModule({
  declarations: [
    AppComponent,
    HaboubiComponent,
    Ex1Component,
    P2Component,
    EX2Component,
    P3Component,
    Ex3Component,
    Ex4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
