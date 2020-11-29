import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../service/store.service"


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  public store:StoreService
  public themeList:any[]
  constructor(store:StoreService){
    this.store=store
  }
  ngOnInit(): void {

  }
  toPrevious(){
    this.store.themeList.unshift(this.store.themeList.pop())
    this.store.setKey("defaultBack",this.store.themeList[3].src)
  }
  toNext(){
    this.store.themeList.push(this.store.themeList.shift())
    this.store.setKey("defaultBack",this.store.themeList[3].src)
  }
}
