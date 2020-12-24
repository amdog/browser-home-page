import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import {HttpClient} from "@angular/common/http"




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public http:HttpClient
  public name:string='';
  @Output() public outer:EventEmitter<string>=new EventEmitter()
  @Input() public show:boolean
  public showSignup:boolean=false;
  public passwd:string=''
    constructor(http:HttpClient) { 
      this.http=http
      this.show=false
    }
  ngOnInit(): void {
  
  }
  login(){
    this.http.post("/blog/link/sign.php",{
      name:this.name,
      passwd:this.passwd
    }).subscribe((d:any)=>{
      if(d.status==1){
        this.outer.emit('offLogin')
      }
    })
  }
  offLogin(){
    this.outer.emit('offLogin')
  }
  toShowSignup(){
    this.showSignup=true
  }
}
