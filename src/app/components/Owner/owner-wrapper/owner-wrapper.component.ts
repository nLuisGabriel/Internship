import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Owner} from "../../../models/owner.model";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-owner-wrapper',
  templateUrl: './owner-wrapper.component.html',
  styleUrls: ['./owner-wrapper.component.scss']
})
export class OwnerWrapperComponent implements OnInit {

  selectedOwner?: Owner;
  ownerList: Owner[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  addOwnerEvent(owner: Owner) {
    let isOwner: boolean = false;
    for (let i = 0; i < this.ownerList.length; i++) {
      if (owner.id == this.ownerList[i].id) {
        this.ownerList[i] = owner;
        isOwner = true;
      }

    }
    if (isOwner == false && owner.id != null) {
      this.ownerList.push(owner);
    }

    this.selectedOwner = undefined;
  }

  editOwnerToList(sendOwner: Owner) {
    this.selectedOwner = sendOwner;
    console.log(this.selectedOwner);
  }


}
