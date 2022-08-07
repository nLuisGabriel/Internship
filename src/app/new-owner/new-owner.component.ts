import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src= "../../assets/images/logo.png"
  }

}
