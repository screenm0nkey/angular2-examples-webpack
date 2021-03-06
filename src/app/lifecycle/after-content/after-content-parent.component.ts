import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'after-content-parent',
  template: `
  <div class='comps'>
  <div class='parent'>
    <p class="path">lifecycle/after-content/after-content-parent.component.ts</p>
    <h4>AfterContent</h4>
      <dlink [id]="35"></dlink>
      <dlink [id]="64"></dlink>
    <div *ngIf='show'>
        <after-content>
            <my-child></my-child><!--Projected content-->
      </after-content>
    </div>

    <h6>-- AfterContent Logs --</h6>
    <p><button (click)='reset()'>Reset</button></p>
    <div *ngFor='let msg of logs'>{{msg}}</div>
  </div>
  </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})
export class AfterContentParentComponent {
  logs: string[];
  show = true;

  constructor(logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    setTimeout(() => (this.show = true), 0);
  }
}
