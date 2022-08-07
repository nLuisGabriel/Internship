import { Component, OnInit } from '@angular/core';
import { Fuel } from "../models/fuel.model";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let img = document.getElementById("logo-id") as HTMLImageElement
    img.src= "../../assets/images/logo-car.png"

    let types = ["Berlină" ,"Break", "Coupé", "Cabriolet", "Limuzină" ,"Roadster", "Spider"];
    let parent = document.getElementById("type") as HTMLSelectElement;
    types.forEach((type)=>{
      let option = document.createElement('option');
      option.text=type;
      option.classList.add("test")
      parent.add(option);
    })

    let owners = ["2950313339420","1510508257887","1570106105902","1610725108796","1780524366457"]
    owners.forEach((owner)=>{
      let parentOwners= document.getElementById('owner-id') as HTMLSelectElement;
      let option = document.createElement('option');
      option.text=owner;
      parentOwners.add(option);
    })

    // const fuelTypes=[this.fuel1,this.fuel2]
    // const innerHTML = ['<p>Fuel Type:<p>'];
    // let parentList = document.getElementById("fuelType") as HTMLDirectoryElement
    // fuelTypes.forEach((fuelType) => {
    //   const formField = `<input type="radio" id="fuel-${fuelType.tip}" name="fuel-type" value="HTML">
    //                         <label for="fuel-${fuelType}" >{fuelType.titlu}</label><br>
    //     `
    //   innerHTML.push(formField);
    //
    // })
    // parentList.innerHTML = innerHTML.join("");

    document?.getElementById('ADD')?.addEventListener('click', function (){
      document?.getElementById('test')?.classList.add('sa');
    })

  }

  fuel1 : Fuel={
    titlu : 'Gasoline',
    tip : "gasoline"
  }

  fuel2 : Fuel={
    titlu : 'Diesel',
    tip : "diesel"
  }

  fuel3 : Fuel={
    titlu : 'Natural gas',
    tip : "natural gas"
  }


}



