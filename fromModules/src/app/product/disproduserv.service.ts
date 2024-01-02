import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})//tells the compiler this is a service
export class DisproduservService {

  //import the HttpClientModule in the core module to get an accesss the db and here we have to import HttpClient
constructor(private http : HttpClient) {
}
  getProd(){
    return(this.http.get("http://localhost:3000/products"))//returns observable which can be accessed only by subscribe method
  }
}
