import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {StoreService} from "../../service/store.service"
import {ViewChild} from "@angular/core"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public store:StoreService
  public src:string
  public index:number
  public keywords:string
  constructor(store:StoreService) {
    this.store=store
    this.src=!!this.store.getKey("defaultEngine")? this.store.enginesList[this.store.getKey("defaultEngine")].src: this.setDefaultEngine() 
   }
  swithEngine(){
    this.index=parseInt(this.store.getKey("defaultEngine"))
    this.index++
    this.store.setKey("defaultEngine",(this.index)%this.store.enginesList.length)
    console.log(this.index)
    console.log(this.store.getKey("defaultEngine"))
    this.src=this.store.enginesList[this.store.getKey("defaultEngine")].src
    console.log(this.src)
  }
  setDefaultEngine(){
    this.store.setKey("defaultEngine","0")
    console.log("defaul")
    return this.store.enginesList[0].src
  }
  searchAction(e?:any){
    if(e && e.key == "Enter"){
      window.location.href="https://www.baidu.com/s?ie=UTF-8&wd="+this.keywords
      this.keywords=""
    }
  }
  ngOnInit(): void {
  }

}
