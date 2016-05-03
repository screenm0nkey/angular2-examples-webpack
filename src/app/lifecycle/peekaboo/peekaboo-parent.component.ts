import {Component} from '@angular/core';
import {PeekABooComponent} from './peekaboo.component.ts';
import {LoggerService}  from '../logger.service.ts';

@Component({
    selector: 'peek-a-boo-parent',
    styles: ['.parent {background: moccasin}'],
    directives: [PeekABooComponent],
    providers: [LoggerService],
    template: `
      <div class="parent">
        <h2>Peek-A-Boo</h2>
    
        <button (click)="toggleChild()">
          {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
        </button>
        <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>
    
        <peek-a-boo *ngIf="hasChild" [name]="heroName">
        </peek-a-boo>
    
        <h4>-- Lifecycle Hook Log --</h4>
        <h5>The logging in the view seems to be a little sync with the contents of the log. see the console</h5>
        <div *ngFor="let msg of hookLog">{{msg}}</div>
      </div>
  `
})
export class PeekABooParentComponent {
    hasChild = false;
    hookLog:string[];

    heroName = 'Windstorm';
    private _logger:LoggerService;

    constructor(logger:LoggerService){
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

    updateHero() {
        this._logger.log('---Update Hero---');
        this.heroName += '!';
        this._logger.tick();
    }
}