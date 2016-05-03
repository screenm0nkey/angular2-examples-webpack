import {Component, AfterContentChecked, AfterContentInit, ContentChild} from '@angular/core';

import {LoggerService}  from '../logger.service';

//////////////////
@Component({
    selector: 'my-child',
    template: '<input [(ngModel)]="hero">'
})
export class ChildComponent {
    hero = 'Magneta';
}


//////////////////////
@Component({
    selector: 'after-content',
    template: `
    <div>-- projected content begins --</div>
      <ng-content></ng-content>
    <div>-- projected content ends --</div>`
    + `
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
    private _prevHero = '';
    public comment = '';

    // Query for a CONTENT child of type `ChildComponent`
    @ContentChild(ChildComponent) contentChild:ChildComponent;

    constructor(private _logger:LoggerService) {
        this._logIt('AfterContent constructor');
    }

    ngAfterContentInit() {
        // viewChild is set after the view has been initialized
        this._logIt('AfterContentInit');
        this._doSomething();
    }

    ngAfterContentChecked() {
        // viewChild is updated after the view has been checked
        if (this._prevHero === this.contentChild.hero) {
            this._logIt('AfterContentChecked (no change)');
        } else {
            this._prevHero = this.contentChild.hero;
            this._logIt('AfterContentChecked');
            this._doSomething();
        }
    }

    // This surrogate for real business logic sets the `comment`
    private _doSomething() {
        this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
    }

    private _logIt(method:string) {
        let vc = this.contentChild;
        let message = `${method}: ${vc ? vc.hero : 'no'} child view`
        this._logger.log(message);
    }
}