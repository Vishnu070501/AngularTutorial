import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorIncService {
  VC: number = 0;

  constructor() {

  }
   incrementVisitorCount(){
      this.VC+=1;
      console.log("The number of visitors that have been to this page are :"+this.VC);
    }
}
