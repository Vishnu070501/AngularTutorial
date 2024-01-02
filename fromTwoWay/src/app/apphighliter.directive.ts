import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({//tells that this is a custom made directive
  selector: '[appApphighliter]'
})
export class ApphighliterDirective {

  constructor(private elementRef : ElementRef) { }//this elementref is used to select whichever element in ehich this directive used
  //code till line 13 will work only when mouse enters
  @HostListener('mouseenter')//this is an event listener on wherever this directive is used will listen for this event(mouse enter)
  mouseenter(){
    this.highlighter('Red');
  }
  //code till line 18 will work only when mouse leaves
  @HostListener('mouseleave')
  mouseleave(){
    this.highlighter('Blue');//this is an event listener on wherever this directive is used will listen for this event(mouse leave)
  }
  highlighter(color: any) {
    this.elementRef.nativeElement.style.backgroundColor = color;//the code to select the needed attribute
  }

}
