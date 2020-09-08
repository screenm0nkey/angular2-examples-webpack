import { Component } from '@angular/core';
import { AuthService } from './services/AuthService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'router-app',
  template: `
    <div class='miscellaneous'>
      <nav style='position: absolute; left: 0; top: 195px; width: 200px; background-color: antiquewhite;'>
        <a routerLink='./home' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Home</a>
        <a [routerLink]="['./aboutus', getId()]" routerLinkActive='active'>About Us</a>
        <a [routerLink]="['./contact']" routerLinkActive='active'>Selective Preloading Strategy</a>
        <a [routerLink]="['./public']" routerLinkActive='active' *ngIf='isLoggedIn()'>Protected</a>
      </nav>
      <div class='comps'>
        <div class="ngx-container">
          <p class="path">misc-mini-apps/auth/auth.component.ts</p>
          <h4>Routing Example</h4>
          <login-component></login-component>
          <section style='background-color:#afafaf; padding : 10px;'>
            <router-outlet></router-outlet>
          </section>
        </div>
      </div>
    </div>
  `
})
export class AuthAppComponent {
  constructor(public auth: AuthService, public router: Router, public route: ActivatedRoute) {
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getId() {
    return 23;
  }
}
