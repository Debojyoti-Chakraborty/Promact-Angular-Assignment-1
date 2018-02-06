import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";
import { EmpListComponent } from "../employee.list/employee.list.component";

import { Router }         from '@angular/router';
import { SharingService } from '../app.sharing.service';


@Component({
    templateUrl:'./employee.html'
})

export class EmpComponent implements OnInit{
    data:any;
    header: string = 'Employee Form';
    qualifications =[];
    experience=[];
    languages=[];
    
    model=new Employee('','','','','','','','Male','Class X','0-1',[]);
    
     constructor(private router:Router,
        private sharingService:SharingService){}

        displayObj(model, url:string){
            this.data=model;
        this.sharingService.setData(this.data);
        this.router.navigate([url]);
    }


    pushLang(lang,model):void{
        if(model.languages.indexOf(lang)==-1)
        model.languages.push(lang);
        else
        model.languages.splice(model.languages.indexOf(lang),1)
    }

   
    ngOnInit(): void{
        this.initializeArrays();
    console.log("Initialised Arrays");
    }
    initializeArrays():void{
        this.qualifications =['Class X', 'Class XII', 'Btech', 'Mtech'];
        this.experience=['0-1', '2-5', '6-9', '10+'];
        this.languages=['C/C++', 'Java', 'C#', 'PHP', 'Python'];
    }
}