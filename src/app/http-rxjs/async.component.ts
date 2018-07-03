import { Component } from "@angular/core";

@Component({
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">John Linquist</a>
        <a routerLink="./http-examples" routerLinkActive="active">Http/RxJs Searches</a>
        <a routerLink="./misc-examples" routerLinkActive="active">Http/RxJs Misc Examples</a>
        <a routerLink="./echonest-app" routerLinkActive="active">Echonest RxJs</a>
        <a routerLink="./spotify" routerLinkActive="active">Spotify</a>
        <a routerLink="./ngrx" routerLinkActive="active">NgRx</a>
        <a routerLink="./chat-app-rxjs" routerLinkActive="active">RxJs Chat App</a>

      </nav>
      <div id="container">
        <router-outlet></router-outlet>
      </div>
    </div>
`
})
export class MainHttpRxJs {}
