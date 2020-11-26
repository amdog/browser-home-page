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
  constructor(store:StoreService) {
    this.store=store
    this.url=this.store.getKey("defaultEngine") == null? this.setDefaultEngine() : this.store.enginesList[this.store.getKey("defaultEngine")]
   }
  swithEngine(){
    this.store.enginesList.forEach((v:object)=>{

    })
  }
  setDefaultEngine(){
    this.store.setKey("defaultEngine","0")
    return this.store.enginesList[0].src
  }
  ngOnInit(): void {
  }

}
