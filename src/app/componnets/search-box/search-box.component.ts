import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {StoreService} from "../../service/store.service"
import {ViewChild,ElementRef} from "@angular/core"
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  public store:StoreService
  @ViewChild("inputKeyWords")  inputKeyWords:ElementRef;
  public src:string
  public index:number
  public newlink:string=''
  public http:HttpClient
  public key:string=''
  public linkList:any[]=['http://chatjs.top']
  public name:string='登录同步标签?'
  public showLogin:boolean=false
  public keywords:string
  public showTab:boolean=false
  constructor(http:HttpClient,store:StoreService) {
    this.store=store
    this.http=http;
    this.http.get('/link/index.php').subscribe((d:any)=>{
      if(d.name){
        this.name=":hello! " + d.name
        this.linkList=d.linkList
      }
    })
    this.src=!!this.store.getKey("defaultEngine")? this.store.enginesList[this.store.getKey("defaultEngine")].src: this.setDefaultEngine()
    ;!!this.store.getKey("saveCookie")? null: this.store.setKey("saveCookie","on")
    this.showCookie()    
    this.keywords=""
   }
    offTab(){
     this.showTab=false
   }
   onTab(){
     this.showTab=true
   } 
   setCookieList():any[]{
     this.store.setKey("cookieList","[]")
     return []
   }
   inputLink(){
    this.newlink=(window.prompt("链接地址:") as any)
    this.http.post('/link/index.php',{
      link:this.newlink
    }).subscribe((d)=>{
      window.location.reload()
    })
  }
   toShowLogin(){
    this.showLogin=true
  }
  offLogin(){
    this.showLogin=false
  }  
  swithEngine(){
    this.index=parseInt(this.store.getKey("defaultEngine"))
    this.index++
    this.store.setKey("defaultEngine",(this.index)%this.store.enginesList.length)
    this.src=this.store.enginesList[this.store.getKey("defaultEngine")].src
  }
  setDefaultEngine(){
    this.store.setKey("defaultEngine","0")
    return this.store.enginesList[0].src
  }
  searchAction(e?:any){
    if(((e && e.key == "Enter") || e==1) && (this.keywords.trim().length>0)){
      let arry:string[]=JSON.parse(this.store.getKey("cookieList"))
      if(arry.length > 10){
        arry.pop()
      }
      arry.unshift(this.keywords)
      this.store.setKey("cookieList",JSON.stringify(arry))
      this.startSearch(this.keywords)
      this.keywords=""
    }
    if(this.keywords.trim().length>0){
      
      this.store.getTips(this.keywords,(d:string[])=>{
      this.store.tipsList=d

    })
    }
    else{
      this.showCookie()
    }
  }
  showCookie(){
    if(!!this.store.getKey("saveCookie") && this.store.getKey("saveCookie")=="on"){
      this.store.tipsList=!!this.store.getKey("cookieList")? JSON.parse(this.store.getKey("cookieList")):this.setCookieList()
    }
    else{
       this.store.tipsList=[]
    }
  }
  tipToKey(keywords){
    this.keywords=keywords
    this.searchAction(1)
  }
  startSearch(keywords:string){
    window.open(this.store.enginesList[this.store.getKey("defaultEngine")].host+keywords)
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    if(window.screen.width<window.screen.height){
      this.inputKeyWords.nativeElement.style.width="60%"
    }
    setTimeout(()=>{
      this.inputKeyWords.nativeElement.focus()
    },1000)
    this.inputKeyWords.nativeElement.value=""
  }
}
