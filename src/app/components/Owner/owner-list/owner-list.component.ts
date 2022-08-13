import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Owner} from "../../../models/owner.model";
import {GenderType} from "../../../enums/gender-enum";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  genderType : GenderType = GenderType.Masculin;
  GenderType = GenderType;
  constructor() {
    switch (this.genderType){
      case GenderType.Masculin:
        console.log("masculin");
        break;
      case GenderType.Feminin:
        console.log("feminin");
        break;
        default :console.log("deafult")
        break;
    }
  }

  @Input () ownerListComponent: Owner[] = [];
  @Output () editOwnerClicked : EventEmitter<Owner> = new EventEmitter();

  ngOnInit(): void {
  }

  editOwner(i: number) {
    const owner :Owner = this.ownerListComponent[i];
    this.editOwnerClicked.emit(owner)
  }
}
