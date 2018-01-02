import { Component } from "@angular/core";

@Component({
  selector: "misc-app",
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dependency Injection and Modules</a>
        <a routerLink="./change-detection" routerLinkActive="active">Change Detection</a>
        <a routerLink="./emitter" routerLinkActive="active">Content Projection (transclusion)</a>
        <a routerLink="./input-binding" routerLinkActive="active">Component Communication</a>
        <a routerLink="./hostbinding" routerLinkActive="active">@HostListener  @HostBinding</a>
        <a routerLink="./rookie-mistakes" routerLinkActive="active">@ContentChildren, ngAfterContentInit and ngContent</a>
        <a routerLink="./view-children" routerLinkActive="active">@ViewChildren @ViewChild ngAfterViewInit</a>
        <a routerLink="./ngzone" routerLinkActive="active">The NgZone</a>
        <a routerLink="./chickens" routerLinkActive="active">Dynamic Components, ExportAs, Renderer2, Directives and ForkJoin()</a>
        <a routerLink="./focus-input" routerLinkActive="active">Focus an Input @ViewChild</a>
        <a routerLink="./directives" routerLinkActive="active">Directives with John Linquist</a>
        <a routerLink="./templates" routerLinkActive="active">Templates (*ngBookIf, *ngBookFor)</a>
        <a routerLink="./speedyapp" routerLinkActive="active">How to Speed up an App</a>
        <a routerLink="./ngstyle" routerLinkActive="active">NgStyle</a>
        <a routerLink="./notifications" routerLinkActive="active">Notifications</a>
        <a routerLink="./socket-io" routerLinkActive="active">Socket-io and @Input getters/setters</a>
        <a routerLink="./tricks" routerLinkActive="active">Tricks</a>
        <a routerLink="./tips" routerLinkActive="active">Tips</a>
        <a routerLink="./change-after-check" routerLinkActive="active" title="ExpressionChangedAfterItHasBeenCheckedError">ExpressionChangedAfterItHasBeenCheckedError</a>
        <a routerLink="./customers" routerLinkActive="active">Mini Customers App</a>
      </nav>
      <div id="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class MiscExamplesComponent {}
