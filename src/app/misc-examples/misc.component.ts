import {Component} from "@angular/core";

@Component({
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink="./dep-injection" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dependency Injection</a>
        <a routerLink="./modules" routerLinkActive="active">Modules</a>
        <a routerLink="./pipes" routerLinkActive="active">Pipes</a>
        <a routerLink="./change-detection" routerLinkActive="active">Change Detection</a>
        <a routerLink="./emitter" routerLinkActive="active">Content Projection (transclusion)</a>
        <a routerLink="./input-binding" routerLinkActive="active">Component Communication</a>
        <a routerLink="./hostbinding" routerLinkActive="active">@HostListener @HostBinding</a>
        <a routerLink="./rookie-mistakes" routerLinkActive="active">@ContentChildren, ngAfterContentInit and ngContent</a>
        <a routerLink="./view-children" routerLinkActive="active">@ViewChildren @ViewChild ngAfterViewInit</a>
        <a routerLink="./ngzone" routerLinkActive="active">The NgZone and Detaching Change Detectors</a>
        <a routerLink="./chickens" routerLinkActive="active">Dynamic Components, ExportAs, Renderer2, Directives and ForkJoin()</a>
        <a routerLink="./focus-input" routerLinkActive="active">Focus an Input @ViewChild</a>
        <a routerLink="./directives" routerLinkActive="active">Directives with John Linquist</a>
        <a routerLink="./templates" routerLinkActive="active">Template Directives and IterableDiffers</a>
        <a routerLink="./ngstyle" routerLinkActive="active">NgStyle</a>
        <a routerLink="./notifications" routerLinkActive="active">Notifications, Socket-io, @Input, @Output, getters/setters</a>
        <a routerLink="./tricks" routerLinkActive="active">Tricks</a>
        <a routerLink="./tips" routerLinkActive="active">Tips</a>
        <a routerLink="./change-after-check" routerLinkActive="active"
           title="ExpressionChangedAfterItHasBeenCheckedError">ExpressionChangedAfterItHasBeenCheckedError</a>
       
      </nav>
     
      <div id="container">
        <ul class="todos">
          <li>Add pure and inpure pipe example (see angular docs)</li>
          <li>Add example for http transformer</li>
          <li>Spotify example is broken</li>
          <li>add dependency example for @Host, @SkipSelf and @Optional</li>
          <li>animations are deprecated in routing example</li>
        </ul>
     
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class MiscExamplesComponent {
}
