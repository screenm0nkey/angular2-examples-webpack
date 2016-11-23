import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
    <nav>
      <a routerLink="forms" routerLinkActive="active">Forms</a>
      <a routerLink="seed" routerLinkActive="active">Seed</a>
      <a routerLink="misc" routerLinkActive="active">Misc Examples</a>
      <a routerLink="httprx" routerLinkActive="active">Http and RxJs</a>
      <a routerLink="egghead" routerLinkActive="active">Egghead</a>
      <a routerLink="lifecycle" routerLinkActive="active">Lifecycle</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../styles/app.css'),
    require('../styles/main.css')
  ],
})
export class AppComponent {
}
