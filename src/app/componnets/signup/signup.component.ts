import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name=''
  passwd=''
  passwdagain=''
  emaile=''
  http:HttpClient
  constructor(http:HttpClient) {
    this.http=http
   }
  ngOnInit(): void {
  }
  sign(){
    this.http.post('/blog/link/sign.php',{
      name:this.name,passwd:this.passwd,passwdagain:this.passwdagain,emaile:this.emaile
    }).subscribe((d:any)=>{
      if(d.status==1){
        window.location.href='/'
      }
    })
  }
}
