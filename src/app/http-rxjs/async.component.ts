import {Component} from '@angular/core';

@Component({
  styles: [require('../../styles/layout.css')],
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="http-examples" routerLinkActive="active">Http/RxJs Searches</a>
        <a routerLink="john-linquist" routerLinkActive="active">John Linquist</a>
        <a routerLink="misc-examples" routerLinkActive="active">Http/RxJs Misc Examples</a>
        <a routerLink="echonest-app" routerLinkActive="active">Echonest RxJs</a>
        <a routerLink="ngrx" routerLinkActive="active">NgRx Clock App</a>
        <a routerLink="ngrx-in-ten" routerLinkActive="active">NgRx in ten minutes</a>
        <a routerLink="ngrx-queue" routerLinkActive="active">NgRx Queue</a>
        <a routerLink="spotify" routerLinkActive="active">Spotify</a>
      </nav>
      <div id="container">
        <router-outlet></router-outlet>
      </div>
    </div>
`
})
export class MainHttpRxJs {
}

