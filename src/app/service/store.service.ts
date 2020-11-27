import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
//
  public enginesList:any[]=[{
    name:"google",
    host:"google.com",
    src:"../../assets/google.svg"
  },{
    name:"baidu",
    host:"baidu.com",
    src:"../../assets/baidu.svg"
  }]
  public footUrl="http://www.beian.gov.cn/"
  public footContent="©copy right  滇ICP备20005951号"
  constructor() { }
  getKey(key:string){
    return localStorage.getItem(key)
  }
  setKey(key:string,value:any){
    localStorage.setItem(key,value)
  }
}
