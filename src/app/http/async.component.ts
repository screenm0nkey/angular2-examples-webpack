import { Component } from '@angular/core';

@Component({
  template: `
    <div class='miscellaneous'>
      <nav>
        <a routerLink='./searches' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Searches</a>
        <a routerLink='./rxjs-examples' routerLinkActive='active'>RxJs Examples</a>
        <a routerLink='./ngrx-examples' routerLinkActive='active'>NgRx Examples</a>
        <a routerLink='./echonest-app' routerLinkActive='active'>MusicSearch RxJs</a>
        <a routerLink='./spotify' routerLinkActive='active'>Spotify</a>
        <a routerLink='./chat-app-rxjs' routerLinkActive='active'>RxJs Chat App</a>
      </nav>
      <div class="ngx-container">
        <router-outlet></router-outlet>
      </div>
    </div>
`
})
export class MainHttpRxJs {
}
