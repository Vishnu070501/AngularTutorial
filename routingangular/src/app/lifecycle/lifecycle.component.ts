import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges{
  @Input() parentBooks:any = "";
  ngOnChanges(changes: SimpleChanges): void {
      console.log("a new book imported from the paarent component .")
  }

}
