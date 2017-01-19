import {Component} from '@angular/core';
import {AuthService} from './services/AuthService';

@Component({
  selector: 'router-app',
  styles: [require('../../styles/layout.css')],
  template: `
<div class="miscellaneous">
  <nav class="navLinks">
      <a [routerLink]="['/auth','home']" routerLinkActive="active">Home</a>
      <a [routerLink]="['/auth','aboutus', getId()]" routerLinkActive="active">About Us</a>
      <a [routerLink]="['/auth','contact']" routerLinkActive="active">Contact us</a>
      <a [routerLink]="['/auth','protected']" routerLinkActive="active" *ngIf="isLoggedIn()">Protected</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>

    <div id="container">
      <h4>Router Sample</h4>
      <login></login>
      <hr>
      <router-outlet></router-outlet>
      <router-outlet name="popup"></router-outlet>
    </div>
  </div>
  `
})
export class AuthAppComponent {
  constructor(private auth : AuthService){}

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

  getId () {
    return 23;
  }
}
