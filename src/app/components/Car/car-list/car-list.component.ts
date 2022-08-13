import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../models/car.model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor() { }

  @Input () carList : Car[]=[];
  @Output ()  sendItemToEdit: EventEmitter<Car> = new EventEmitter();

  ngOnInit(): void {
  }

  editItem(i: number) {
    this.sendItemToEdit.emit(this.carList[i]);
  }
}
