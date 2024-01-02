import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: ICanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {//this function decisdes whether the component can be deactivated and the boolean value(as to whether can deactivate) is assigned the canexit property of that component
    return component.canexit?component.canexit():false;
  }

}

//can deactivate is like a interface can be applied which ever component we wnat to just implement this is exported to the component to ehich the deactivate guard is applied
export interface ICanDeactivate{
  canexit:()=>boolean;
}
