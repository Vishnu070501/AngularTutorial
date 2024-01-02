import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegimdfComponent } from './regimdf/regimdf.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ContactusComponent,
    ProductdetailsComponent,
    RegisterComponent,
    RegimdfComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//for routing
    HttpClientModule,//for db connection
    FormsModule,//forms module is needed for both two way binding and template driven forms
    ReactiveFormsModule//for module driven forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
