import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './componnets/search-box/search-box.component';
import { SettingComponent } from './componnets/setting/setting.component';
import { ThemeComponent } from './componnets/theme/theme.component';

import {StoreService} from "./service/store.service"

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SettingComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

  }
}
