import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSetFocus]'
})
export class SetFocusDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() :void {
    this.elementRef.nativeElement.focus();
  }
}
