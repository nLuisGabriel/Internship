import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  value = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  // switchState(){
  //   this.value=!this.value;
  // }


}
