import {Component, OnInit} from '@angular/core';
import {Car} from "../../../models/car.model";

@Component({
  selector: 'app-car-wrapper',
  templateUrl: './car-wrapper.component.html',
  styleUrls: ['./car-wrapper.component.scss']
})
export class CarWrapperComponent implements OnInit {

  selectedCar?: Car;
  carListWrapper: Car[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewCar(car: Car) {
    this.carListWrapper.push(car);
  }


  saveSelectedCar(selectedCar: Car) {
    this.selectedCar = selectedCar;

  }

  UpdateCar(car: Car) {
    for (let i = 0; i < this.carListWrapper.length; i++) {
      if (this.carListWrapper[i].ID == car.ID) {
        this.carListWrapper[i] = car;
      }
    }
    this.selectedCar = undefined;
  }


}
