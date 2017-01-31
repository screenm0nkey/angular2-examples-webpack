import {Component} from '@angular/core';
import {AuthService} from './services/AuthService';

@Component({
  selector: 'router-app',
  styles: [require('../../styles/layout.css')],
  template: `
<div class="miscellaneous">
  <nav class="navLinks">
      <a [routerLink]="['./']" routerLinkActive="active">Home</a>
      <a [routerLink]="['./aboutus', getId()]" routerLinkActive="active">About Us</a>
      <a [routerLink]="['./contact']" routerLinkActive="active">Contact us</a>
      <a [routerLink]="['./protected']" routerLinkActive="active" *ngIf="isLoggedIn()">Protected</a>
    </nav>

    <div id="container">
      <h4>Router Sample</h4>
      <login></login>
      <hr>
      <router-outlet></router-outlet>
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
