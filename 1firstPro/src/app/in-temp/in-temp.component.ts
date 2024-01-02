import { Component } from '@angular/core';

//in inline template component the html code can be written inside the ts file 
@Component({
  selector: 'app-in-temp',
  template: `
    <p>
      in-temp works!
    </p>
  `,
  styleUrls: ['./in-temp.component.css']
})
export class InTempComponent {

}
