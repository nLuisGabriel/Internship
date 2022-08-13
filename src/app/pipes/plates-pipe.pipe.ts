import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'platesPipe'
})
export class PlatesPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let toEdit = value;
    const regex = /(^([a-zA-Z]{2})([0-9]{2})([a-zA-Z]{3})$)|(^([bB]{1})([0-9]{2,3})([a-zA-Z]{3})$)/; // BV10AAA
    // const regex2 =  /([bB])([0-9)]{3})([^IO]{3})/; // B100AAA
    const match = regex.exec(toEdit);
    if(match){
      return match[0].toUpperCase().split(/(\d+)/).join('-');
      // match[0] retunreaza o lista cu bucatile din input
      // se face uppercase
      // se splituieste unde gaseste un grup de numere
      // se concateneaza cu -
    }
    // const match2 = regex2.exec(toEdit);
    // if(match2){
    //   return match2[0].toUpperCase().split(/(\d+)/).join('-')+" m2";
    // }
//([a-zA-Z]{2})([0-9]{2})([a-zA-Z]{3})
    //([bB]{1})([0-9]{2,3})([a-zA-Z]{3})

    return "Incorect";
  }

}
