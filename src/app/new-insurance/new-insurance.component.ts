import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.scss']
})
export class NewInsuranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src= "../../assets/images/logo-ins.png"
  }

}
