import {Component} from "@angular/core";

@Component({
  selector: 'misc-app',
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dependency Injection and Modules</a>
        <a routerLink="./customers" routerLinkActive="active">Mini Customers App</a>
        <a routerLink="./chickens" routerLinkActive="active">BrowserDomAdapter, Directives and ForkJoin()</a>
        <a routerLink="./input-binding" routerLinkActive="active">Component Communication @Inputs @Outputs</a>
        <a routerLink="./hostbinding" routerLinkActive="active">@HostListener  @HostBinding</a>
        <a routerLink="./directives" routerLinkActive="active">Directives with John Linquist</a>
        <a routerLink="./templates" routerLinkActive="active">Templates</a>
        <a routerLink="./emitter" routerLinkActive="active">Transclusion 1</a>
        <a routerLink="./accordian" routerLinkActive="active">Transclusion 2</a>
        <a routerLink="./change-detection" routerLinkActive="active">Change Detection</a>
        <a routerLink="./change2" routerLinkActive="active">Change Detection and Immutable Model</a>
        <a routerLink="/httprx/echonest-app">Change Detection in Echonest</a>
        <a routerLink="./focus-input" routerLinkActive="active">Focus an Input @ViewChild</a>
        <a routerLink="./ngzone" routerLinkActive="active">NgZone & NgStyle</a>
        <a routerLink="./rookie-mistakes" routerLinkActive="active">@ContentChildren and ngContent</a>
        <a routerLink="./notifications" routerLinkActive="active">Notifications</a>
        <a routerLink="./socket-io" routerLinkActive="active">Socket-io and @Input getters/setters</a>
        <a routerLink="./view-children" routerLinkActive="active">@ViewChildren @ViewChild</a>
        <a routerLink="./tricks" routerLinkActive="active">Tricks</a>
      </nav>
      <div id="container">
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
})

export class MiscExamplesComponent {
}
