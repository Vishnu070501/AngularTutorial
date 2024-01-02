import { VisitorIncService } from './../visitor-inc.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labelinc',
  templateUrl: './labelinc.component.html',
  styleUrls: ['./labelinc.component.css']
})
export class LabelincComponent {

constructor(private visitorIncService:VisitorIncService){ }


incByLabel() {
  this.visitorIncService.incrementVisitorCount();
}



}
