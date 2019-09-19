import {Component} from '@angular/core';

@Component({
  template: `
    <div class="miscellaneous">
      <nav>
        <a routerLink='./links' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Links</a>
        <a routerLink='./dep-injection' routerLinkActive='active'>Dependency Injection</a>
        <a routerLink='./modules' routerLinkActive='active'>Modules</a>
        <a routerLink='./pipes' routerLinkActive='active'>Pipes</a>
        <a routerLink='./change-detection' routerLinkActive='active'>Change Detection</a>
        <a routerLink='./content-projection' routerLinkActive='active'>Content Projection (transclusion)</a>
        <a routerLink='./input-binding' routerLinkActive='active'>Component Communication</a>
        <a routerLink='./hostbinding' routerLinkActive='active'>@HostListener @HostBinding</a>
        <a routerLink='./rookie-mistakes' routerLinkActive='active'>@ContentChildren, ngAfterContentInit and ngContent</a>
        <a routerLink='./view-children' routerLinkActive='active'>@ViewChildren @ViewChild ngAfterViewInit</a>
        <a routerLink='./ngzone' routerLinkActive='active'>The NgZone and Detaching Change Detectors</a>
        <a routerLink='./chickens' routerLinkActive='active'>Dynamic Components, ExportAs, Renderer2, Directives and ForkJoin()</a>
        <a routerLink='./focus-input' routerLinkActive='active'>Focus an Input @ViewChild</a>
        <a routerLink='./directives' routerLinkActive='active'>Directives with John Linquist</a>
        <a routerLink='./templates' routerLinkActive='active'>Template Directives and IterableDiffers</a>
        <a routerLink='./ngstyle' routerLinkActive='active'>NgStyle</a>
        <a routerLink='./notifications' routerLinkActive='active'>Notifications, Socket-io, @Input, @Output, getters/setters</a>
        <a routerLink='./tricks' routerLinkActive='active'>Tricks</a>
        <a routerLink='./tips' routerLinkActive='active'>Tips</a>
        <a routerLink='./interceptor' routerLinkActive='active'>Interceptor</a>
        <a routerLink='./change-after-check' routerLinkActive='active'
           title='ExpressionChangedAfterItHasBeenCheckedError'>ExpressionChangedAfterItHasBeenCheckedError</a>
      </nav>
      
      <div class="ngx-container">
        <ul class='todos collapsed' #todolist (click)="toggleVisibility(todolist)">
          <li class="path"><p class="path">misc-examples/misc.component.ts</p></li>
          <li>ng-template</li>
          <li>make changes to ngrx examples inline with this article <external-link [id]="43"></external-link><a href=""> </a></li>
          <li>Spotify example is broken</li>
        </ul>

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
