import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {Owner} from "../../../models/owner.model";
import {GenderType} from "../../../enums/gender-enum";

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  id: number = 0;

  // ownerList: Owner[]=[];
  constructor() {
  }

  @Output() addOwnerEvent: EventEmitter<Owner> = new EventEmitter();
  @Input() ownerReceived?: Owner;


  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src = "../../assets/images/logo.png"

  }

  submitOwnerForm(ownerForm: NgForm) {

    const values = ownerForm.form.value;
    const owner = new Owner(
      values.ownerFirstName,
      values.ownerLastName,
      values.ownerBirthDate,
      values.ownerCnp,
      values.ownerGender
    );
    this.id++;
    owner.id = this.id;
     this.addOwnerEvent.emit(owner);
    ownerForm.form.reset();

  }


  info(ownerForm: NgForm) {
    console.log("test",this.ownerReceived);
    let id = this.ownerReceived?.id;
    let firstName = ownerForm.form.value.ownerFirstName;
    let ownerLastName = ownerForm.form.value.ownerLastName;
    let ownerCnp = ownerForm.form.value.ownerCnp;
    let ownerGender = ownerForm.form.value.ownerGender;
    let ownerBirthDate = ownerForm.form.value.ownerBirthDate;
    this.ownerReceived = new Owner(firstName, ownerLastName, ownerBirthDate,ownerCnp,ownerGender );
    this.ownerReceived.id = id;
    console.log(this.addOwnerEvent);
    this.addOwnerEvent.emit(this.ownerReceived);
    this.ownerReceived=undefined;

  }
}
