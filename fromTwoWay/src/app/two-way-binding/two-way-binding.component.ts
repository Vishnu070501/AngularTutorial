import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  sampleVar:String = 'xxxxxx';
  @Input() pMessage:string ='';//this decorator allows this variable to be as an attribute to the tag of this component itself great right:)?
  //pmessage is the attribute that will bring back the message from the parent component(app.component in this case)to the child component(two-Way-Binding)
  @Output() cMessage:any = new EventEmitter();//this allows this cMessage to act as an event which can emit values when placed inside ()
  sendMessage() {
    this.cMessage.emit("ok Parent")
  }
}
