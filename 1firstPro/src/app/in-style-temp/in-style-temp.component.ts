import { Component } from '@angular/core';

@Component({
  selector: 'app-in-style-temp',
  template: `
    <h1 class = "custom">
      in-style-temp works!
</h1>
  `,
  styles: [ 
   '.custom{color:grey}'
  
  ]
})
export class InStyleTempComponent {

}
