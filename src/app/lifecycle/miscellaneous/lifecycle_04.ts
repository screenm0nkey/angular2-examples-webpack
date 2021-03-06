import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'afters',
  template: `
  <div class='ui label'>
    Counter: {{ counter }}
  </div>
  <button (click)='increment()'>
    Increment
  </button>
  `
})
export class AftersCmp
  implements OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  counter: number;

  constructor() {
    console.log('%cAftersCmp [constructor]', 'color:white');
    this.counter = 1;
  }

  increment() {
    console.log('%c[counter]', 'color:violet');
    this.counter += 1;
  }

  ngOnInit() {
    console.log('%cOnInit', 'color:yellow');
  }

  ngOnDestroy() {
    console.log('%cOnDestroy', 'color:purple');
  }

  ngDoCheck() {
    console.log('%cDoCheck', 'color:pink');
  }

  ngOnChanges() {
    console.log('%cOnChanges', 'color:lime');
  }

  // this is used for <ng-content>
  ngAfterContentInit() {
    console.log('%cAfterContentInit', 'color:red');
  }

  ngAfterContentChecked() {
    console.log('%cAfterContentChecked', 'color:blue');
  }

  // this is used for viewChild /viewChildren
  ngAfterViewInit() {
    console.log('%cAfterViewInit', 'color:orange');
  }

  ngAfterViewChecked() {
    console.log('%cAfterViewChecked', 'color:green');
  }
}

@Component({
  selector: 'lifecycle-sample-app-4',
  template: `
  <p class="path">/lifecycle/miscellaneous/lifecycle_04</p>
  <h4>AfterContentInit, AfterViewInit, AfterContentChecked and AfterViewChecked</h4>
  <dlink [id]="16"></dlink>
  <p>See the Console. It displays all the life cycle events</p>

  <p>use <code>ngAfterViewInit()</code> if you're using viewChild /viewChildren</p>
  <p>use <code>ngAfterContentInit()</code> if you're injecting the content using ngcontent</p>
  
  <p>The increment button click triggers an event which causes angular to invoke the lifecycle handlers</p>

  <afters *ngIf='displayAfters'></afters>
  <button (click)='toggleAfters()' style='margin-bottom: 10px'>Toggle Component's 'display' property</button>
  `
})
export class LifecycleSampleApp4 {
  displayAfters: boolean;

  constructor() {
    this.displayAfters = true;
  }

  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }
}
