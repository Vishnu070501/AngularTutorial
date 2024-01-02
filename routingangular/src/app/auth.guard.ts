import { LoginserService } from './loginser.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginserService:LoginserService,private router :Router){}//login service object to be used to check if theuser is logged in,router allows us to navigate
  canActivate(//this method is automaticzlly called when the applied component is accessed
    route: ActivatedRouteSnapshot,//contains the last page or url used (remember activated route from routing rpotocol)
    state: RouterStateSnapshot/*this router state snapshot redirects to otherpages from here */):boolean  {//this function can return a observable, a promise, a boolean, or a url tree ,observable and promise conain both booleaan and url tree
    if(!this.loginserService.Isuserloggedin()){
      this.router.navigate(["/login"],{queryParams:{retUrl:route.url}});//telling angular to navigate to login page and appending the last page's url to "{the code bw these is just js expression which just returns retUrl}all the things inside the array will be appended to url "
      return false;
    }else{
      return true;

    }
  }

}
