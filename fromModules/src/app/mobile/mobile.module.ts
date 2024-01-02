import { MobiledisplayComponent } from './mobiledisplay/mobiledisplay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MobiledisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [MobiledisplayComponent]
})
export class MobileModule { }
