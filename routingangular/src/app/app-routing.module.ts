import { RegimdfComponent } from './regimdf/regimdf.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { DeactivateGuard } from './deactivate.guard';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

//module created only if routing is enabled on the app
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent//all the routes that are followed when you give the name to the router link variable is specified here
    //so it reaches that following component
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'product',
    component:ProductComponent,
    canActivate:[AuthGuard],//can only activate if auth gaurd returns true

    // children:[
    //   {
    //     path:':check',
    //     component:ProductdetailsComponent//child route this topic is called
    //     // is u wanna guard child use can activate child guard
    //   }
    // ]
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },

 // below commented path for a new page takes a whole router outlet tag at the app component module
  {
    path: 'product/:check',//:check variable link
    component:ProductdetailsComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path: 'MDF',
    component: RegimdfComponent
  },
  //instead if we want it in the same page as the products page just give it as a child path to the main products outlet
  {
    path:"**",//called a wildcard search (mention it at the very end same concept as the default in switch cases)
    component:HomeComponent//if the url request is'nt available when gthe usser types the cmponent url manually
    //'eg lcalhost:3300/saSZ then redirect to default page
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//the above mentioned routes are given to the angular routing module
  //which routes the pages accordingly
  exports: [RouterModule]
})
export class AppRoutingModule { }
