import {Component} from '@angular/core';
import {AuthService} from './services/AuthService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'router-app',
  template: `
    <div class='miscellaneous'>
      <nav class='navLinks' style='position: absolute;left: 0;top: 148px;'>
        <a routerLink='./home' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Home</a>
        <a [routerLink]="['./aboutus', getId()]" routerLinkActive='active'>About Us</a>
        <a [routerLink]="['./contact']" routerLinkActive='active'>Selective Preloading Strategy</a>
        <a [routerLink]="['./protected']" routerLinkActive='active' *ngIf='isLoggedIn()'>Protected</a>

      </nav>
      <div class='comps'>
        <div class="ngx-container">
          <p class='path'>misc-mini-apps/auth/auth.component.ts</p>
          <h4>Routing Example</h4>
          <login-component></login-component>
          <section style='border:solid 5px lime'>
            <router-outlet></router-outlet>
            <router-outlet name='popup'></router-outlet>
          </section>
        </div>
      </div>
    </div>
  `
})
export class AuthAppComponent {
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getId() {
    return 23;
  }
}
