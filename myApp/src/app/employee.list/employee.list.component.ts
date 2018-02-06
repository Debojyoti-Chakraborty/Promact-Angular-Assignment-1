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
        this.data=this.sharingService.getData();
        console.log(this.data);
    }
    delrec(emp,i:number):void{
        if(i==0){
        if (window.confirm("Are You Sure You Want to delete This Record?")) {
            this.sharingService.deldata(emp);
            this.data=this.sharingService.getData();
        }
        }
        else if(i==1){
             this.sharingService.deldata(emp);
            this.data=this.sharingService.getData();
        }
    }
    editrec(emp,url:string):void{
        this.sharingService.setObj(emp);
        this.delrec(emp,1);
        this.router.navigate([url]);
    }
    redir(url:string):void{
        this.router.navigate([url]);
    }
}