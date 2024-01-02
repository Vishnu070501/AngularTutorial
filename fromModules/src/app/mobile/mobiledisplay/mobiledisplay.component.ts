import { IncrservService } from './../incrserv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledisplay',
  templateUrl: './mobiledisplay.component.html',
  styleUrls: ['./mobiledisplay.component.css']
})
export class MobiledisplayComponent implements OnInit {

  constructor(private incrementor:IncrservService) { }
            //^incremetor injected as private which creates the object just once

  mobileIncrementor(){
    this.incrementor.incrementor();
  }

  ngOnInit() {
  }


}
