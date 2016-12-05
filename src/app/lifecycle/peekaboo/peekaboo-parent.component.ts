import {Component} from '@angular/core';
import {LoggerService}  from '../logger.service.ts';

@Component({
  selector: 'peek-a-boo-parent',
  styles: ['.parent {background: moccasin}'],
  providers: [LoggerService],
  template: `
      <div class="parent">
        <h4>Peek-A-Boo</h4>
    
        <button (click)="toggleChild()">
          {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
        </button>
        <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>
        <button (click)="triggerChangeDetection()" [hidden]="!hasChild">Trigger change dectection()</button>
    
        <peek-a-boo *ngIf="hasChild" [name]="heroName">
        </peek-a-boo>
    
        <h4>-- Lifecycle Hook Log --</h4>
<pre>
    The logging in the view seems to be a little out of sync with the contents of the log. 
    see the console. This is because we explicity call this._logger.tick(), which triggers
    a timeout, which in turn triggers the change detection to run. 
    Every time the change detection runs these lifecycle methods are run;
    DoCheck(), AfterContentChecked(), AfterViewChecked(), which are added to the logger output.
    
</pre>
        
        <div *ngFor="let msg of hookLog">{{msg}}</div>
      </div>
  `
})
export class PeekABooParentComponent {
  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private _logger: LoggerService;

  constructor(logger: LoggerService) {
    this._logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this._logger.clear(); // clear log on create
    }
    this._logger.tick();
  }

  triggerChangeDetection() {
    this._logger.tick();
  }

  updateHero() {
    this._logger.log('---Update Hero---');
    this.heroName += '!';
    this._logger.tick(); // causes the change detection to run
  }
}
