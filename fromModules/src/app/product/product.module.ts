import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';



@NgModule({
  declarations: [
    ProductdisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductdisplayComponent]
})
export class ProductModule { }
