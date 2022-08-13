import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fuel} from "../../../models/fuel.model";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Car} from "../../../models/car.model";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit, AfterViewInit {
  customInput: number = 123;
  carList: Car[] = [];
  Id: number = 0
  @Input() appName: string | undefined;
  @Output() addCarEvent: EventEmitter<Car> = new EventEmitter();
  @Input() carToEdit?: Car;
  @Output() modifiedCar: EventEmitter<Car> = new EventEmitter();
  @Input() buttonName?: string;
  componentTitle: string = "Component Title";
  myDate = new Date();
  carForm?: FormGroup;
  // prefilledCar: Car = new Car("dacia", "model2", 100321310, "sn2121", "Berlină", "123daa22", "dsad", 100, 10101);
  prefilledCar= {
    brand: "dacia",
    model: "logan",
    cubicCap: 1000,
    serialNumber: "asdasa",
    type: "Coupe",
    plates: "aa22aaa",
    fuelType: "dasda",
    power: 1000,
    ownerID: 1003213

  }

  constructor(private _fb: FormBuilder) {
    // this.carForm = new FormGroup(
    // {
    //   carBrand: new FormControl("Bmw"),
    //   carModel : new FormControl("123")
    // }
    // )
    if (this.carForm?.status == "INVALID") {
      return
    }
    ;

    this.carForm = this._fb.group({
      brand: ["bmw", Validators.required],
      model: ["model", Validators.maxLength(10)],
      cubicCap: [123, [Validators.min(1000), Validators.max(5000)]],
      serialNumber: "asd",
      type: "Berlină",
      plates: "asd",
      power: 100,
      fuelType: "12",
      ownerID: "22"

    })


  }


  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src = "../../assets/images/logo-car.png"
  }

  ngAfterViewInit(): void {
    this.carType();
    let owners = ["2950313339420", "1510508257887", "1570106105902", "1610725108796", "1780524366457"]
    owners.forEach((owner) => {
      let parentOwners: HTMLSelectElement = document.getElementById('owner-id') as HTMLSelectElement;
      let option = document.createElement('option');
      option.text = owner;
      parentOwners.add(option);
    })
  }

  fuel1: Fuel = {
    titlu: 'Gasoline',
    tip: "gasoline"
  }


  fuel2: Fuel = {
    titlu: 'Diesel',
    tip: "diesel"
  }

  fuel3: Fuel = {
    titlu: 'Natural gas',
    tip: "natural gas"
  }


  submitForm() {
    // const values = form.form.value;
    //
    // const car = new Car(
    //   values.carBrand,
    //   values.carModel,
    //   values.carCubicCap,
    //   values.carSerialNumber,
    //   values.carType,
    //   values.carPlates,
    //   values.fuelType,
    //   values.carPower,
    //   values.carOwnerId
    // );
    // this.addCarEvent.emit(car);
    //
    // if (!!this.carToEdit) {
    //   car.ID = this.carToEdit.ID;
    //   this.modifiedCar.emit(car);
    // } else {
    //   this.Id++;
    //   car.ID = this.Id;
    //   this.addCarEvent.emit(car);
    // }
    //
    //
    // form.form.reset();
    console.log("my  form  ", this.carForm)
    const car = this.carForm?.value;
    console.log('new created car==>>', car)
  }

  private carType() {
    let types = ["Berlină", "Break", "Coupé", "Cabriolet", "Limuzină", "Roadster", "Spider"];
    let parent = document.getElementById("type") as HTMLSelectElement;
    types.forEach((type) => {
      let option = document.createElement('option');
      option.text = type;
      option.classList.add("test")
      parent?.add(option);
    })
  }


  resetValues() {
    // form.form.reset();
  }

  patchFormValue() {
    this.carForm?.patchValue(this.prefilledCar);
  }
}



