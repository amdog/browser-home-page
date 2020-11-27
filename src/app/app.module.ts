import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './componnets/search-box/search-box.component';
import { SettingComponent } from './componnets/setting/setting.component';
import { ThemeComponent } from './componnets/theme/theme.component';
import { FootComponent } from './componnets/foot/foot.component';

import {StoreService} from "./service/store.service";

@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    SearchBoxComponent,
    SettingComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

  }
}
