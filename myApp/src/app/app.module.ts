import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpComponent } from './employee/employee.component';
import { EmpListComponent } from './employee.list/employee.list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'add', component: EmpComponent },
        { path: 'list', component: EmpListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }