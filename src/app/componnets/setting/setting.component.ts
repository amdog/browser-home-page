import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../service/store.service"



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  public store:StoreService
  public settingItems:string[]
  constructor(store:StoreService) { 
      this.store=store
      this.settingItems=[]
      this.settingItems[0]=this.store.getKey("defaultBack")
      this.settingItems[1]=this.store.getKey("saveCookie")
  }
  saveSetting(){
    this.store.setKey("defaultBack",this.settingItems[0])
    this.store.setKey("saveCookie",this.settingItems[1])
    if(this.settingItems[1] == "off"){
      this.store.setKey("cookieList","[]")
      this.store.tipsList=[]
    }
    alert("success")
    window.location.reload()
  }
  resetSetting(){
    this.settingItems=["","off"]
  }
  ngOnInit(): void {
  }

}
