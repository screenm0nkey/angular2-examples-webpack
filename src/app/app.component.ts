import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'main-app',
  template: `
     <nav>
      <a routerLink="/forms" routerLinkActive="active">Forms</a>
      <a routerLink="/seed" routerLinkActive="active">Seed</a>
      <a routerLink="/misc" routerLinkActive="active">Misc Examples</a>
      <a routerLink="/httprx" routerLinkActive="active">Http and RxJs</a>
      <a routerLink="/egghead" routerLinkActive="active">Egghead</a>
      <a routerLink="/lifecycle" routerLinkActive="active">Lifecycle</a>
      <a routerLink="/auth" routerLinkActive="active">Routing Example</a>
      <a routerLink="/chat" routerLinkActive="active">RxJs Chat App</a>
      <a routerLink="/chat-redux" routerLinkActive="active">Redux Chat App</a>
      <button [routerLink]="[{ outlets: { popup: ['compose'] } }]">Named Router Outlet</button>
    </nav>
    <main>
      <router-outlet></router-outlet>
      <router-outlet name="popup"></router-outlet>
    </main>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../styles/app.css')
  ],
})
export class AppComponent {
}
