import {Component} from '@angular/core';
import {LoggerService}  from '../logger.service';

@Component({
    selector: 'after-content-parent',
    template: `
  <div class="parent">
    <h2>AfterContent</h2>
    <a href="https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#aftercontent" target="_blank">Angular docs</a>

    <div *ngIf="show">
        <after-content>
            <my-child></my-child><!--Projected content-->
      </after-content>
    </div>

    <h4>-- AfterContent Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logs">{{msg}}</div>
  </div>
  `,
    styles: ['.parent {background: burlywood}'],
    providers: [LoggerService]
})
export class AfterContentParentComponent {
    logs:string[];
    show = true;

    constructor(logger:LoggerService) {
        this.logs = logger.logs;
    }

    reset() {
        this.logs.length = 0;
        // quickly remove and reload AfterContentComponent which recreates it
        this.show = false;
        setTimeout(() => this.show = true, 0)
    }
}
