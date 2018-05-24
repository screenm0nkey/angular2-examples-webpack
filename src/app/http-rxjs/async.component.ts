import { Component } from "@angular/core";

@Component({
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">John Linquist</a>
        <!--<a routerLink="./http-examples" routerLinkActive="active">Http/RxJs Searches</a>-->
        <!--<a routerLink="./misc-examples" routerLinkActive="active">Http/RxJs Misc Examples</a>-->
        <!--<a routerLink="./echonest-app" routerLinkActive="active">Echonest RxJs</a>-->
        <!--<a routerLink="./ngrx" routerLinkActive="active">NgRx Clock App</a>-->
        <!--<a routerLink="./ngrx-in-ten" routerLinkActive="active">NgRx in ten minutes</a>-->
        <!--<a routerLink="./ngrx-queue" routerLinkActive="active">NgRx Queue</a>-->
        <!--<a routerLink="./spotify" routerLinkActive="active">Spotify</a>-->
      </nav>
      <div id="container">
        <router-outlet></router-outlet>
      </div>
    </div>
`
})
export class MainHttpRxJs {}
