export class Car {
  private _brand: string;
  private _model: string;
  private _cubicCap: number;
  private _serialNumber: string;
  private _type: string;
  private _plates: string;
  private _fuelType: string;
  private _power: number;
  private _ownerID: number;

  constructor(
    brand: string,
    model: string,
    cubicCap: number,
    serialNumber: string,
    type: string,
    plates: string,
    fuelType: string,
    power: number,
    ownerID: number
  ) {
    this._brand = brand;
    this._model = model;
    this._cubicCap = cubicCap;
    this._serialNumber = serialNumber;
    this._type = type;
    this._plates = plates;
    this._fuelType = fuelType;
    this._power = power;
    this._ownerID = ownerID;
  }

  public get brand() {
    return this._brand;
  }

  public set brand(brand: string) {
    this._brand = brand;
  }

  public get model() {
    return this._model;
  }

  public set model(model: string) {
    this._model = model;
  }

  public get cubicCap() {
    return this._cubicCap;
  }

  public set cubicCap(cubicCap: number) {
    this._cubicCap = cubicCap;
  }

  public get serialNumber() {
    return this._serialNumber;
  }

  public set serialNumber(serialNumber: string) {
    this._serialNumber = serialNumber;
  }

  public get type() {
    return this._type;
  }

  public set type(type: string) {
    this._type = type;
  }

  public get plates() {
    return this._plates;
  }

  public set plates(plates: string) {
    this._plates = plates;
  }

  public get fuelType() {
    return this._fuelType;
  }

  public set fuelType(fuelType: string) {
    this._fuelType = fuelType;
  }

  public get power() {
    return this._power;
  }

  public set power(power: number) {
    this._power = power;
  }

  public get ownerID() {
    return this._ownerID;
  }

  public set ownerID(ownerID: number) {
    this._ownerID = ownerID;
  }

}
