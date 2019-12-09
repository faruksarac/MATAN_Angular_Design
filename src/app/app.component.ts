import {Component, EventEmitter, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matan';
  isAuth: boolean;
  constructor(private router: Router){}
  ngOnInit(){
    //backend islemleri olmadigi icin auth kontrolu yapilamamaktadi. Backend kismi yazildigi zaman html iskelet ypaisindaki
    //isAuth degiskeni servislerden kontrol edilebilir
    //Burdaki amac navbar ve left-menu komponenetlerinin login, signup ve sms sayfalarinda gozukmemesidir.
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.split('/')[1] == 'sms' || event.url.split('/')[1] == 'login' || event.url.split('/')[1] == 'signup') {
          this.isAuth = false;
        }else this.isAuth = true;
      }
    });
  }
}
