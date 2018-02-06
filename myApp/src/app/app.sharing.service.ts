import { Injectable } from '@angular/core';

@Injectable()
export class SharingService{
    private data:any = [];

    setData(data:any){
        this.data.push(data);
    }

    getData():any{
        return this.data;
    }
    deldata(data):void{
        this.data.splice(this.data.indexOf(data),1);
    }
}