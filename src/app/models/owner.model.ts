import {GenderType} from "../enums/gender-enum";

export class Owner {
  private  _ID? : number;
  private _firstName: string;
  private _lastName: string;
  private _birthDate: Date;
  private _cnp: number;
  private _gender: GenderType;

  constructor(

    firstName: string,
    lastName: string,
    birthdate: Date,
    cnp: number,
    gender: GenderType
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthDate = birthdate;
    this._cnp = cnp;
    this._gender = gender;

  }

  public get id(){
    return this._ID;
  }

  public set id( id: number | undefined){
    this._ID= id;
  }




  public get firstName() {
    return this._firstName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get birthDate() {
    return this._birthDate;
  }

  public set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }

  public get cnp() {
    return this._cnp;
  }

  public set cnp(cnp: number) {
    this._cnp = cnp;
  }

  public get gender() {
    return this._gender;
  }

  public set gender(gender: GenderType) {
    this._gender = gender;
  }


}
