import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";


@Component({
  selector: 'afters',
  template: `
  <div class="ui label">
    <i class="list icon"></i> Counter: {{ counter }}
  </div>

  <button class="ui primary button" (click)="inc()">
    Increment
  </button>
  `
})
export class AftersCmp implements OnInit, OnDestroy, DoCheck,
  OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked {
  counter: number;

  constructor() {
    console.log('AfterCmp --------- [constructor]');
    this.counter = 1;
  }

  inc() {
    console.log('AfterCmp --------- [counter]');
    this.counter += 1;
  }

  ngOnInit() {
    console.log('AfterCmp - OnInit');
  }

  ngOnDestroy() {
    console.log('AfterCmp - OnDestroy');
  }

  ngDoCheck() {
    console.log('AfterCmp - DoCheck');
  }

  ngOnChanges() {
    console.log('AfterCmp - OnChanges');
  }

  // this is used for <ng-content>
  ngAfterContentInit() {
    console.log('AfterCmp - AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterCmp - AfterContentChecked');
  }

  // this is used for viewChild /viewChildren
  ngAfterViewInit() {
    console.log('AfterCmp - AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterCmp - AfterViewChecked');
  }
}

@Component({
  selector: 'lifecycle-sample-app-4',
  template: `
  <h4>AfterContentInit, AfterViewInit, AfterContentChecked and AfterViewChecked</h4>
  
  <pre>use <strong>ngAfterViewInit()</strong> if you're doing a view query</pre>
  <pre>use <strong>ngAfterContentInit()</strong> if you're injecting the content using ngcontent</pre>

  <afters *ngIf="displayAfters"></afters>
  <button class="ui primary button" (click)="toggleAfters()">
    Toggle
  </button>
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




