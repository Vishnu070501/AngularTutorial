import { MobileModule } from './mobile/mobile.module';
import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ProductModule,MobileModule,HttpClientModule
  ],                                          //^to get connection to the database
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
