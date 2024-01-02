import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstPro';
  interpolation = 'Interpolation allows us to display dynamic data from this typescript file which could come after some logic or from a function';
  IPFunct(){
    return "interpolation can also return values that come from a function";
  }
  getname(name:String){
    alert("the function getname has been called."+name)
  }
  eventAlert(eventVal:any){
    console.log(eventVal)
  }
  num1:any=0;
}
