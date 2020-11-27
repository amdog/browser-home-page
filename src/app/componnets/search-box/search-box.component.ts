import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../service/store.service"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public store:StoreService
  public url:string
  public index:number
  constructor(store:StoreService) {
    this.store=store
    this.url=!!this.store.getKey("defaultEngine")? this.setDefaultEngine() : this.store.enginesList[this.store.getKey("defaultEngine")]
   }
  swithEngine(){
    this.index=parseInt(this.store.getKey("defaultEngine"))
    this.index++
    this.store.setKey("defaultEngine",(this.index)%this.store.enginesList.length)
    console.log(this.index)
    console.log(this.store.getKey("defaultEngine"))
    this.url=this.store.enginesList[this.store.getKey("defaultEngine")].url
  }
  setDefaultEngine(){
    this.store.setKey("defaultEngine","0")
    return this.store.enginesList[0].src
  }
  ngOnInit(): void {
  }

}
