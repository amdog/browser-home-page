import { Component } from '@angular/core';
import { from } from 'rxjs';
import {ViewChild,ElementRef} from "@angular/core"
import {StoreService} from "./service/store.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'homePage';
  @ViewChild("backGround") public eleBack:ElementRef
  public flag:number=0
  public imgSrc1:string="../../../assets/setting.svg"
  public imgSrc2:string="../../../assets/theme.svg"
  public Url:string
  public store:StoreService
  public themeList:any[]
  public newlink:string=''
  public key:string=''
  public linkList:any[]=['http://chatjs.top']
  public name:string='登录同步标签?'
  public showLogin:boolean=false
  constructor(store:StoreService){
    this.store=store
    this.Url=!!this.store.getKey("defaultBack")? this.store.getKey("defaultBack"):this.setDefaultBack()
  }
  hoverContainer(){
    this.imgSrc1="../../../assets/setting-light.svg"
    this.imgSrc2="../../../assets/theme-light.svg"
  }
  setDefaultBack(){
    this.store.setKey("defaultBack",this.store.themeList[3].src)
    return this.store.getKey("defaultBack")
  }
  outContainer(){
    this.imgSrc1="../../../assets/setting.svg"
    this.imgSrc2="../../../assets/theme.svg"
  }
  switchView(flag:number){
    this.flag=flag
  }
  ngAfterViewInit(){
    this.eleBack.nativeElement.style.background=`url('${this.Url}')`
  }
  ngAfterViewChecked(){
    this.eleBack.nativeElement.style.background=`url('${this.store.getKey('defaultBack')}')`
  }
  toShowLogin(){
    this.showLogin=true
  }
  offLogin(e){
    this.showLogin=false
  }  
}
