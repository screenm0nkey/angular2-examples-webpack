import {Component} from '@angular/core';

@Component({
  template: `
      <div class="miscellaneous">
          <nav>
              <a routerLink='./links' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Links</a>
              <a routerLink='./tips' routerLinkActive='active'>Dos and Donts</a>
              <a routerLink='./dep-injection' routerLinkActive='active'>Dependency Injection</a>
              <a routerLink='./modules' routerLinkActive='active'>Modules</a>
              <a routerLink='./pipes' routerLinkActive='active'>Pipes</a>
              <a routerLink='./change-detection' routerLinkActive='active'>Change Detection</a>
              <a routerLink='./input-binding' routerLinkActive='active'>Component Communication</a>
              <a routerLink='./hostbinding' routerLinkActive='active'>@HostListener @HostBinding</a>
              <a routerLink='./content-projection' routerLinkActive='active'>Content Projection using @ContentChildren, ngAfterContentInit and ngContent(<lgt>ng-content</lgt>) </a>
              <a routerLink='./view-children' routerLinkActive='active'>@ViewChildren @ViewChild ngAfterViewInit</a>
              <a routerLink='./ngzone' routerLinkActive='active'>The NgZone and Detaching Change Detectors</a>
              <a routerLink='./dynamic' routerLinkActive='active'>Dynamic Component and DOM Element Creation</a>
              <a routerLink='./chickens' routerLinkActive='active'>ExportAs, Renderer2, Directives and ForkJoin()</a>
              <a routerLink='./focus-input' routerLinkActive='active'>Focus an Input @ViewChild</a>
              <a routerLink='./directives' routerLinkActive='active'>Structual Directives, <br><lgt>ng-container</lgt> and Directives with John Linquist</a>
              <a routerLink='./templates' routerLinkActive='active'>Creating Structural Directives and IterableDiffers</a>
              <a routerLink='./ngstyle' routerLinkActive='active'>NgStyle</a>
              <a routerLink='./notifications' routerLinkActive='active'>Notifications, Socket-io, @Input, @Output, getters/setters</a>
              <a routerLink='./tricks' routerLinkActive='active'>Tricks</a>
              <a routerLink='./interceptor' routerLinkActive='active'>Interceptor</a>
              <a routerLink='./change-after-check' routerLinkActive='active'>ExpressionChangedAfterItHasBeenCheckedError</a>
              <a routerLink='/mini-apps/auth-app'>Router Animations, canDeactivate canActiveate Route Guards</a>
          </nav>

          <div class="ngx-container">
              <router-outlet></router-outlet>
          </div>
      </div>
  `
})
export class MiscExamplesComponent {

  toggleVisibility(element: HTMLElement) {
    const hasClass = element.classList.contains('collapsed');
    element.classList[hasClass ? 'remove' : 'add']('collapsed');
  }
}
