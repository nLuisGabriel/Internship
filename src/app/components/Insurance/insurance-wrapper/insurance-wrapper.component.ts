import { Component, OnInit } from '@angular/core';
import {Insurance} from "../../../models/insurance.model";

@Component({
  selector: 'app-insurance-wrapper',
  templateUrl: './insurance-wrapper.component.html',
  styleUrls: ['./insurance-wrapper.component.scss']
})
export class InsuranceWrapperComponent implements OnInit {

  insuranceListWrapper : Insurance[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addNewInsurace(insurance: Insurance) {
    this.insuranceListWrapper.push(insurance)
    console.log(this.insuranceListWrapper);
  }
}
