import { VisitorIncService } from './../visitor-inc.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttoninc',
  templateUrl: './buttoninc.component.html',
  styleUrls: ['./buttoninc.component.css']
})
export class ButtonincComponent {
  constructor(private visitorincService:VisitorIncService){ }
incCountByClick() {
this.visitorincService.incrementVisitorCount();
}

}
