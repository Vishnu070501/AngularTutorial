import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {
  username:any ='';
  password:any ='';
  isloggedIn:boolean=false;

  constructor() { }

  logginginUser(u:any,p:any){
    this.username=u;
    this.password=p;
    this.isloggedIn=true;
  }

  Isuserloggedin():any{
    return this.isloggedIn;//similar to wrapper class in java just conerts it to a observable boolean

  }

  loggingUserOut(){
    this.isloggedIn=false;
  }
}
