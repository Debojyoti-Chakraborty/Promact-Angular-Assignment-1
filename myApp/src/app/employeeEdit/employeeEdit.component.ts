import { Component, OnInit } from '@angular/core';
import { SharingService } from '../app.sharing.service';
import { Router }         from '@angular/router';
import { Employee } from "../employee/employee.model";

@Component({
    templateUrl:'./employeeEdit.html'
})


export class EmpEditComponent implements OnInit{

    model: any;
    qualifications=[];
    experience=[];
    languages=[];
     constructor(private router:Router,
        private sharingService:SharingService){}

        ngOnInit(){
            this.initializeArrays();
            this.model=this.sharingService.getObj();
        
    }

     displayObj(model, url:string){
            this.model=model;
        this.sharingService.setData(this.model);
        this.router.navigate([url]);
    }
    initializeArrays():void{
        this.qualifications =['Class X', 'Class XII', 'Btech', 'Mtech'];
        this.experience=['0-1', '2-5', '6-9', '10+'];
        this.languages=['C/C++', 'Java', 'C#', 'PHP', 'Python'];
    }
}