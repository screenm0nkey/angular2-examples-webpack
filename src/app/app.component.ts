import { Component, ViewEncapsulation } from '@angular/core';
import {
  MrTestyServiceOne,
  MrTestyServiceTwo
} from './misc-examples/components/dependency-injection/services/more-services.service';

@Component({
  selector: 'app-root',
  styleUrls:['./app.css'],
  template: `
    <nav class='main'>
      <a routerLink='/misc' routerLinkActive='active'>Misc Examples</a>
      <a routerLink='/forms' routerLinkActive='active'>Forms</a>
      <a routerLink='/httprx' routerLinkActive='active'>Http and RxJs</a>
      <a routerLink='/lifecycle' routerLinkActive='active'>Lifecycle</a>
      <a routerLink='/mini-apps' routerLinkActive='active'>Mini Apps</a>

      <button [routerLink]='[{ outlets: { popup: ["compose"] } }]'>Named Router Outlet</button>
    </nav>
    <main>
      <router-outlet></router-outlet>
      <router-outlet name='popup'></router-outlet>
    </main>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo) {}
}
