import {Component, ViewEncapsulation} from '@angular/core';
import {
  MrTestyServiceOne,
  MrTestyServiceTwo
} from './misc-examples/components/dependency-injection/injectables.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class='main'>
      <a routerLink='/misc' routerLinkActive='active'>Misc Examples</a>
      <a routerLink='/forms' routerLinkActive='active'>Forms</a>
      <a routerLink='/httprx' routerLinkActive='active'>Http and RxJs</a>
      <a routerLink='/lifecycle' routerLinkActive='active'>Lifecycle</a>
      <a routerLink='/mini-apps' routerLinkActive='active'>Mini Apps</a>
      <button [routerLink]='[{ outlets: { popup: ["compose"] } }]'>Named Router Outlet</button>
        <collapse-all></collapse-all>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name='popup'></router-outlet>

  `,
})
export class AppComponent {
  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo) {
  }
}
