import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";
@Component({
    selector:'emp',
    templateUrl:'./employee.html'
})

export class EmpComponent implements OnInit{
    header: string = 'Employee Form';
    qualifications =['Class X', 'Class XII', 'Btech', 'Mtech'];
    experience=['0-1', '2-5','6-9','10+'];
    languages=['C/C++','Java', 'C#', 'PHP', 'Python'];
    
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
    console.log("Initialised");
    }
}