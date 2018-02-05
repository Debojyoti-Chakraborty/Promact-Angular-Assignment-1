import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";
@Component({
    selector:'emp',
    templateUrl:'./employee.html'
})

export class EmpComponent implements OnInit{
    header: string = 'Employee Form';
    qualifications =[];
    experience=[];
    languages=[];
    
    model=new Employee('','','','','','','','Male','Class X','0-1',[]);
    
    pushLang(lang,model):void{
        if(model.languages.indexOf(lang)==-1)
        model.languages.push(lang);
        else
        model.languages.splice(model.languages.indexOf(lang),1)
    }

    displayObj(model): void{
        console.log(model);
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