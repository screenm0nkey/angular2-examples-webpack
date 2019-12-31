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
              <a routerLink='./directives' routerLinkActive='active'>Directives with John Linquist</a>
              <a routerLink='./templates' routerLinkActive='active'>Creating Structural Directives and IterableDiffers</a>
              <a routerLink='./ngstyle' routerLinkActive='active'>NgStyle</a>
              <a routerLink='./notifications' routerLinkActive='active'>Notifications, Socket-io, @Input, @Output, getters/setters</a>
              <a routerLink='./tricks' routerLinkActive='active'>Tricks</a>
              <a routerLink='./interceptor' routerLinkActive='active'>Interceptor</a>
              <a routerLink='./change-after-check' routerLinkActive='active'>ExpressionChangedAfterItHasBeenCheckedError</a>
          </nav>

          <div class="ngx-container">
<!--              <ul class='todos collapsed' #todolist (click)="toggleVisibility(todolist)">-->
<!--                  <li class="path"><p class="path">misc-examples/misc.component.ts</p></li>-->
<!--                  <li>Add a collapse icon for sections in the app</li>-->
<!--                  <li>you were lookingi nto how this component works src/app/misc-examples/components/multi-content/accordian/accordian-group.component.ts</li>-->
<!--                  <li>Spotify example is broken</li>-->
<!--              </ul>-->

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
