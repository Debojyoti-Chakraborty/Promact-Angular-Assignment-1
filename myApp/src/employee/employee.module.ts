import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EmpComponent } from './employee.component';


@NgModule({
  declarations: [
    EmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmpComponent]
})
export class EmpModule { }