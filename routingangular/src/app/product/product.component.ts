import { GetProductsService } from './../get-products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private prodserv:GetProductsService){this.prodserv.getting().subscribe(data=>{
    this.products=data;
  })}
  products:any;

}
