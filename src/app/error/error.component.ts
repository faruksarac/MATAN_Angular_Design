import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  nfImage: any = '../assets/undraw_page_not_found_su7k.svg';
  constructor() { }

  ngOnInit() {
  }

}
