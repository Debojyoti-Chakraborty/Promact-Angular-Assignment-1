import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { SharingService } from '../app.sharing.service';
import { Router }         from '@angular/router';
@Component({
    templateUrl:'./employee.list.html'
})
export class EmpListComponent implements OnInit{

    
      data:any=[];

    constructor(private router:Router,
        private sharingService:SharingService){}

    ngOnInit(){
        this.data=this.sharingService.getData());
        console.log(this.data);
    }
    delrec(emp):void{
        this.sharingService.deldata(emp);
        this.data=this.sharingService.getData());
    }
}