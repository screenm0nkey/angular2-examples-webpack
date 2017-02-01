import {Component, Output, OnInit, OnDestroy, EventEmitter} from "@angular/core";

@Component({
  selector: 'on-init-1',
  template: `
  <div class="ui label">I'm a component</div>
  `
})
export class OnInitCmp1 implements OnInit, OnDestroy {
  @Output() update = new EventEmitter();

  ngOnInit(): void {
    this.update.emit('ngOnInit() called');
  }

  ngOnDestroy(): void {
    this.update.emit('ngOnDestroy() called');
  }
}

@Component({
  selector: 'lifecycle-sample-app-1',
  template: `
  <h4>OnInit and OnDestroy</h4>

  <button class="ui primary button" (click)="toggle()">Toggle</button>
  <div class="ui label">{{componentState}} </div>
  <on-init-1 *ngIf="display" (update)="logIt($event)"></on-init-1>
  `
})
export class LifecycleSampleApp1 {
  display: boolean;
  componentState: string = '';

  constructor() {
    this.display = true;
  }

  logIt(val): void {
    this.componentState = val;
  }

  toggle(): void {
    this.display = !this.display;
  }
}

