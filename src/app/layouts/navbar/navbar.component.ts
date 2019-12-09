import { Component, OnInit } from '@angular/core';
import {
  bounceInRightAnimation,
  fadeInAnimation,
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation
} from 'angular-animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceInRightAnimation()
  ]
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  clickedSearchButton: boolean;
  constructor() { }

  ngOnInit() {
  this.clickedSearchButton = false;
  }

}
