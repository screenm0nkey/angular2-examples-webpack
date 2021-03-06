import { Component } from '@angular/core';

@Component({
  template: `
      <div class="miscellaneous">
          <nav>
              <a routerLink='./links' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Links</a>
              <a routerLink='./tips' routerLinkActive='active'>Dos and Donts</a>
              <a routerLink='./dep-injection' routerLinkActive='active'>Dependency Injection</a>
              <a routerLink='./modules' routerLinkActive='active'>Modules</a>
              <a routerLink='./pipes' routerLinkActive='active'>Pipes</a>
              <a routerLink='./directives' routerLinkActive='active'>Directives</a>
              <a routerLink='./templates' routerLinkActive='active'>Structural Directives</a>
              <a routerLink='./dynamic' routerLinkActive='active'>DOM Manipulation & Dynamic Component Creation</a>
              <a routerLink='./change-detection' routerLinkActive='active'>Change Detection</a>
              <a routerLink='./input-binding' routerLinkActive='active'>Component Communication</a>
              <a routerLink='./hostbinding' routerLinkActive='active'>@HostListener @HostBinding</a>
              <a routerLink='./content-projection' routerLinkActive='active'>Content Projection using @ContentChildren</a>
              <a routerLink='./content-projection' routerLinkActive='active'>ngAfterContentInit and ngContent(<lgt>ng-content</lgt>) </a>
              <a routerLink='./view-children' routerLinkActive='active'>@ViewChildren @ViewChild ngAfterViewInit</a>
              <a routerLink='./ngzone' routerLinkActive='active'>The NgZone</a>
              <a routerLink='./ngzone' routerLinkActive='active'>Detaching Change Detectors</a>
              <a routerLink='./custom-decorator' routerLinkActive='active'>Custom Decorator</a>
              <a routerLink='./focus-input' routerLinkActive='active'>Focus an Input with @ViewChild</a>
              <a routerLink='./ngstyle' routerLinkActive='active'>NgStyle</a>
              <a routerLink='./notifications' routerLinkActive='active'>Using Socket-io</a>
              <a routerLink='./tricks' routerLinkActive='active'>Tricks</a>
              <a routerLink='./interceptor' routerLinkActive='active'>Interceptors</a>
              <a routerLink='./change-after-check' routerLinkActive='active'>ExpressionChangedAfterItHasBeenCheckedError</a>
              <a routerLink='./chickens' routerLinkActive='active'>Miscellaneous</a>
              <a>--</a>
              <a routerLink='/mini-apps/auth-app'>Route Guards, CanDeactivate and CanActiveate</a>
              <a routerLink='/mini-apps/insert-component' routerLinkActive='active'>Reusable Components using TemplateRef</a>
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
