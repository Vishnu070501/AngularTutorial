import { GetProductsService } from './../get-products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  constructor(private prodServ:GetProductsService, private route:ActivatedRoute/*inbuilt angular service helps us to retreive/access the url*/){}
  products:any;
  productInUrl:any;
  particularprod:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.prodServ.getting().subscribe((data)=>{

      this.products=data;

      this.route.params.subscribe(data=>{

        this.productInUrl=data['check'];
      })
      console.log(this.products);

      for(let item of this.products){
        console.log(item.title);
        console.log(this.productInUrl);
        if(item.title==this.productInUrl){
          this.particularprod = item;
        }
      }
    })


  }
}
