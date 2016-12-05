import {Component} from '@angular/core';

@Component({
  selector: 'router-app',
  styles: [require('../../styles/layout.css')],
  template: `
<div class="miscellaneous">
  <nav class="navLinks">
      <a [routerLink]="['/auth','home']">Home</a>
      <a [routerLink]="['/auth','contact']">Contact us</a>
      <a [routerLink]="['/auth','protected']">Protected</a>
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
}
