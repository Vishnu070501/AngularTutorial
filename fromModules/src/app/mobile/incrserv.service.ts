import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//we are gonna use this service outside this module too
export class IncrservService {

  constructor() { }

  counterSig:any=0;
  incrementor(){
    this.counterSig=this.counterSig+1;
    console.log(this.counterSig);
  }
}
