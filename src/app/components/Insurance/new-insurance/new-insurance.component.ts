import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Car} from "../../../models/car.model";
import {Insurance} from "../../../models/insurance.model";

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.scss']
})
export class NewInsuranceComponent implements OnInit {

  constructor() { }
  insuranceList: Insurance[]=[];
  @Output () addInsuranceEvent : EventEmitter<Insurance> =  new EventEmitter<Insurance>();
  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src= "../../assets/images/logo-ins.png"
  }

  submitInsuranceForm(insuranceForm: NgForm) {
    const values= insuranceForm.form.value;



    const insurance = new Insurance(
      values.insuranceCompany,
      values.insurancePersodID,
      values.insuranceCardId,
      values.directPay,
      values.payMethod,
      values.insuranceStartDate,
      values.insuranceEndDate,
      values.insurancePrice,
      values.insuranceNotes
    );
    // console.log(insuranceForm);
    // this.insuranceList.push(insurance);
    this.addInsuranceEvent.emit(insurance);
    console.log("lista de asigurari: ", this.insuranceList);
    insuranceForm.reset();
  }
}
