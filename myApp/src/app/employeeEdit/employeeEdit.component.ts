import { Component, OnInit } from '@angular/core';
import { SharingService } from '../app.sharing.service';
import { Router }         from '@angular/router';
import { Employee } from "../employee/employee.model";

@Component({
    templateUrl:'./employeeEdit.html'
})


export class EmpEditComponent implements OnInit{

    model=new Employee('','','','','','','','Male','Class X','0-1',[]);

     constructor(private router:Router,
        private sharingService:SharingService){}

        ngOnInit(){
        this.model=this.sharingService.getObj();
        
    }

     displayObj(model, url:string){
            this.model=model;
        this.sharingService.setData(this.model);
        this.router.navigate([url]);
    }

}