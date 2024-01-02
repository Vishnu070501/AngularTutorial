import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingangular';
  books:any = ["adventures of Tom Sawyer:Mark Twain"];
  constructor(){
    setInterval(()=>{
      this.books.push("random"+Date.now());
    },1000);
  }
}
