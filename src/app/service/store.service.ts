import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
//
  public enginesList:any[]=[{
    name:"google",
    src:"../../assets/google.svg"
  },{
    name:"baidu",
    src:"../../assets/baidu.svg"
  }]
  constructor() { }
  getKey(key:string){
    return localStorage.getItem(key)
  }
  setKey(key:string,value:any){
    localStorage.setItem(key,value)
  }
}
