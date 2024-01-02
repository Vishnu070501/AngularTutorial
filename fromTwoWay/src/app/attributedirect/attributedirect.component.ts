import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirect',
  templateUrl: './attributedirect.component.html',
  styleUrls: ['./attributedirect.component.css']
})
export class AttributedirectComponent {
classtaken:boolean = true;
  changeClass() {
    this.classtaken = !this.classtaken;
}

}
