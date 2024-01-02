import { Component } from '@angular/core';
//inline style file the css code can be written here itself inside the ts file
@Component({
  selector: 'app-in-style',
  templateUrl: './in-style.component.html',
  styles: [ 
    '.general{color:red}'
  ]
})
export class InStyleComponent {

}
