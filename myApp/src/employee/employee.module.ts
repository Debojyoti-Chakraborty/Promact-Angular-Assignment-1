import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { EmpComponent } from './employee.component';


@NgModule({
  declarations: [
    EmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmpComponent]
})
export class EmpModule { }