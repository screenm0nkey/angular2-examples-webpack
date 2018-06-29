import { Component } from "@angular/core";
import { AuthService } from "./services/AuthService";

@Component({
  selector: "router-app",
  template: `
<div class="miscellaneous">
  <nav class="navLinks">
      <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a [routerLink]="['./aboutus', getId()]" routerLinkActive="active">About Us</a>
      <a [routerLink]="['./contact']" routerLinkActive="active">Selective Preloading Strategy</a>
      <a [routerLink]="['./protected']" routerLinkActive="active" *ngIf="isLoggedIn()">Protected</a>
    </nav>

    <div id="container" class="special">
      <h4>Routing Example</h4>
      <login-component></login-component>
      <section style="border:solid 5px lime">
        <router-outlet></router-outlet>
      </section>
    </div>
  </div>
  `
})
export class AuthAppComponent {
  constructor(private auth: AuthService) {}

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getId() {
    return 23;
  }
}
