import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appZebraStrippedTable]'
})
export class ZebraStrippedTableDirective  implements AfterViewInit{

  @Input() appZebraStrippedTable : number=-1;


  constructor(private _elemRef:ElementRef) {

  }
  ngAfterViewInit() {
    if(this.appZebraStrippedTable %2==0){
      this._elemRef.nativeElement.style.backgroundColor='rgb(100,100,100,0.5)';
    }

  }

}
