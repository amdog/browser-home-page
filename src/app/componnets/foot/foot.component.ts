import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../service/store.service"


@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  public url:string
  public footHtml:string
  constructor(store:StoreService) {
    this.url=store.footUrl
    this.footHtml=store.footContent
   }

  ngOnInit(): void {
  }

}
