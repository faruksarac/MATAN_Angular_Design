import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  @ViewChild('card', {static: true}) card : ElementRef<HTMLDivElement>;
  // For creating random variable for background image name
  rndNmbr =  Math.floor(Math.random() * (25 - 1)) + 1;
  // For creating background image CSS style in order to send random background information to HTML side
  myStyles={ 'backgroundImage': 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(../../../assets/ccard_backs/'+this.rndNmbr+'.jpeg)'};
  // For Credit Card variables
  cardNumber: number;
  cardHolder: string;
  selectedMonth: string;
  selectedYear: string;
  cvvCode: string;
  // For Credit Card Expired Date data
  month: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  year: number[] = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2021,2022,2023,2024,2025,2026,2027,2027,2028,2029,2030];

  constructor() {}

  ngOnInit() {
    // Assign Credit Card Variable to null
    this.cardNumber = null;
    this.cardHolder = null;
    this.selectedMonth = null;
    this.selectedYear = null;
    this.cvvCode = null;
  }
  /*--------------------------------
  *26.10.2019 02:10 - Faruk SARAC
  *This methos provides splitting card number by 4 character just like XXXX-XXXX-XXXX-XXXX
  ---------------------------------*/
  splitCardNumber(value: number){
    return String(value).match(/.{1,4}/g).join('-');
  }
  /*--------------------------------
  *26.10.2019 02:10 - Faruk SARAC
  *This method provides slice year 2 characters in order to show last two character of year on credit card just like 2019 => 19
  ---------------------------------*/
  sliceYear(value: any){
    let strValue = String(value);
    return strValue.slice(2,4);
  }
  /*--------------------------------
  *26.10.2019 02:11 - Faruk SARAC
  *This method provides adding cvv class html element that has card class
  ---------------------------------*/
  cvvActive(){
    this.card.nativeElement.classList.add('cvv');
  }
  /*--------------------------------
  *26.10.2019 02:11 - Faruk SARAC
  *This method provides removing cvv class html element that has card class
  ---------------------------------*/
  cvvDeactive(){
    this.card.nativeElement.classList.remove('cvv');
  }
}
