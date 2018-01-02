import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";

@Component({
  selector: "on-init-1",
  template: `
  <div class="ui label">I'm a component</div>
  `
})
export class OnInitCmp1 implements OnInit, OnDestroy {
  @Output() update = new EventEmitter();

  ngOnInit(): void {
    this.update.emit("ngOnInit() called");
  }

  ngOnDestroy(): void {
    this.update.emit("ngOnDestroy() called");
  }
}

@Component({
  selector: "lifecycle-sample-app-1",
  template: `
  <p class="path">/lifecycle/miscellaneous/lifecycle_01.ts</p>
  <h4>ngOnInit and ngOnDestroy</h4>

  <div class="clearfix">
    <button style="float: left" (click)="toggle()">Toggle Componets "display" state</button>
    <pre>{{componentState | json}} </pre>
    <on-init-1 *ngIf="display" (update)="logIt($event)"></on-init-1>
  </div>
  `
})
export class LifecycleSampleApp1 {
  display: boolean;
  componentState: string = "";

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
