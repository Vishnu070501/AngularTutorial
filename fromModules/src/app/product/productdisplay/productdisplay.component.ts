import { Component } from '@angular/core';
import { IncrservService } from 'src/app/mobile/incrserv.service';
import { DisproduservService } from '../disproduserv.service';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent {
  constructor(private incrementor:IncrservService,private prod:DisproduservService){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  //incrementor (increments the same count)
  productincrement(){
    this.incrementor.incrementor();
  }

  //gets all the products
  products:any;
  displayProducts(){
    this.prod.getProd().subscribe((data:any)=>this.products=data);
  }                                 //^arrow funct(next function(notification)),data is the parameter of the subscribe function which holds all the latest values which are returned when subscribed we obtain all the values from the subscriber and assign it to products
}
