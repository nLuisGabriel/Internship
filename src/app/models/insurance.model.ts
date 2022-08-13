export class Insurance {
  private _company: string;
  private _ownerID: number;
  private _carId: string;
  private _directPay: boolean;
  private _paymentType: string;
  private _startDate: Date;
  private _endDate: Date;
  private _price: number;
  private _notes: string;

  constructor(
    company: string,
    ownerID: number,
    carId: string,
    directPay: boolean,
    paymentType: string,
    startDate: Date,
    endDate: Date,
    price: number,
    notes: string
  ) {
    this._company = company;
    this._ownerID = ownerID;
    this._carId = carId;
    this._directPay = directPay;
    this._paymentType = paymentType;
    this._startDate = startDate;
    this._endDate = endDate;
    this._price = price;
    this._notes = notes;
  }

  public get directPay(){
    return this._directPay;
  }
  public set directPay(directPay:boolean){
    this._directPay=directPay;
  }

  public get company() {
    return this._company
  }

  public set company(company: string) {
    this._company = company
  }

  public get ownerID() {
    return this._ownerID
  }

  public set ownerID(ownerID: number) {
    this._ownerID = ownerID
  }

  public get carId() {
    return this._carId
  }

  public set carId(carId: string) {
    this._carId = carId
  }

  public get paymentType() {
    return this._paymentType
  }

  public set paymentType(paymentType: string) {
    this._paymentType = paymentType
  }

  public get startDate() {
    return this._startDate
  }

  public set startDate(startDate: Date) {
    this._startDate = startDate
  }

  public get price() {
    return this._price
  }

  public set price(price: number) {
    if (price > 0) {
      this._price = price;
    }
  }

  public get notes() {
    return this._notes
  }

  public set notes(notes: string) {
    this._notes = notes
  }

  public get endDate(){
    return this._endDate;
  }

  public set endDate(endDate:Date){
    this._endDate=endDate;
  }

}
