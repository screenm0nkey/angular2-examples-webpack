import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'after-view-parent',
  template: `
    <div class='comps'>
      <div class='parent'>
        <p class="path">lifecycle/after-view/after-view-parent.component.ts</p>
        <h4>AfterViewChecked, AfterViewInit</h4>
          <dlink [id]="54"></dlink>
    
        <after-view *ngIf='show'></after-view>
    
        <h5>-- AfterView Logs --</h5>
        <p><button (click)='reset()'>Reset</button></p>
        <div *ngFor='let msg of logs'>{{msg}}</div>
      </div>  
    </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})
export class AfterViewParentComponent {
  logs: string[];
  show = true;

  constructor(logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    setTimeout(() => (this.show = true), 0);
  }
}
