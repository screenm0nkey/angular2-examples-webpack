import {Component} from 'angular2/core';
import {LoggerService}  from '../logger.service';
import {AfterViewComponent}  from './after-view.component';


@Component({
    selector: 'after-view-parent',
    template: `
      <div class="parent">
        <h2>AfterView</h2>
        <a href="https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#afterview" target="_blank">Docs</a>
    
        <after-view *ngIf="show"></after-view>
    
        <h4>-- AfterView Logs --</h4>
        <p><button (click)="reset()">Reset</button></p>
        <div *ngFor="#msg of logs">{{msg}}</div>
      </div>
  `,
    styles: ['.parent {background: burlywood}'],
    providers:[LoggerService],
    directives: [AfterViewComponent]
})
export class AfterViewParentComponent {
    logs:string[];
    show = true;

    constructor(logger:LoggerService){
        this.logs = logger.logs;
    }

    reset() {
        this.logs.length=0;
        // quickly remove and reload AfterViewComponent which recreates it
        this.show = false;
        setTimeout(() => this.show = true, 0)
    }
}