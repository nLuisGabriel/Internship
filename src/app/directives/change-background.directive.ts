import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements AfterViewInit {
  private _defaultColor="red";
  @Input() appChangeBackground?: string;

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    console.log(this._elementRef);
    this._elementRef.nativeElement.style.backgroundColor = this.appChangeBackground || this._defaultColor;
  }


}
