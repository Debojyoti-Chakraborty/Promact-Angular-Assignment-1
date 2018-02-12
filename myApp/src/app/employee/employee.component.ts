import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";
import { EmpListComponent } from "../employee.list/employee.list.component";

import { Router }         from '@angular/router';
import { SharingService } from '../app.sharing.service';
import {Language} from "./employee.language"

@Component({
    templateUrl:'./employee.html'
})

export class EmpComponent implements OnInit{
    data:any;
    header: string = 'Employee Form';
    qualifications =[];
    experience=[];
    languages= new Array<Language>();
    
    model=new Employee('','','','','','','','Male','Class X','0-1',[{name:"C/C++", isEnabled:false}, {name:"Java", isEnabled:true}, {name:"C#", isEnabled:true}, {name:"PHP", isEnabled:false}, {name:"Python", isEnabled:false}]);
    
     constructor(private router:Router,
        private sharingService:SharingService){}

        displayObj(model, url:string){
            this.data=model;
        this.sharingService.setData(this.data);
        this.router.navigate([url]);
    }


    pushLang(lang,model):void{
        model.languages[model.languages.findIndex(i=>i.name===lang)].isEnabled= !model.languages[model.languages.findIndex(i=>i.name===lang)].isEnabled;
    }

   
    ngOnInit(): void{
        this.initializeArrays();
    console.log("Initialised Arrays");
    }
    initializeArrays():void{
        this.qualifications =['Class X', 'Class XII', 'Btech', 'Mtech'];
        this.experience=['0-1', '2-5', '6-9', '10+'];
        this.languages=[{name:"C/C++", isEnabled:false}, {name:"Java", isEnabled:true}, {name:"C#", isEnabled:true}, {name:"PHP", isEnabled:false}, {name:"Python", isEnabled:false}];
    }
}