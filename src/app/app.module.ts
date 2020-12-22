import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import {HttpClientJsonpModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './componnets/search-box/search-box.component';
import { SettingComponent } from './componnets/setting/setting.component';
import { ThemeComponent } from './componnets/theme/theme.component';
import { FootComponent } from './componnets/foot/foot.component';

import {StoreService} from "./service/store.service";
import { from } from 'rxjs';
import { LoginComponent } from './componnets/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    SearchBoxComponent,
    SettingComponent,
    ThemeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

  }
}
