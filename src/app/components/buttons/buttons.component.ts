import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../models/car.model";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() sendResetValues : EventEmitter<void> = new EventEmitter();
  @Input() buttonName? :string;
  constructor() { }

  ngOnInit(): void {
  }

  // resetValues() {
  //   this.sendResetValues.emit();
  // }
}
