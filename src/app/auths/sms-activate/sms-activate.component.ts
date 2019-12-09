import {Component, OnInit, ViewChild} from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';


@Component({
  selector: 'app-sms-activate',
  templateUrl: './sms-activate.component.html',
  styleUrls: ['./sms-activate.component.css']
})
export class SmsActivateComponent implements OnInit {
  @ViewChild('countdown',{static: true}) counter: CountdownComponent;
  constructor() { }

  ngOnInit() {

  }

}
