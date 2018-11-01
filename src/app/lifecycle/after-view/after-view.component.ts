import {AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {LoggerService} from '../logger.service';

// // // // // // // // // 
@Component({
  selector: 'after-my-child',
  template: '<input [(ngModel)]=\'hero\'>'
})
export class ChildViewComponent {
  hero = 'Magneta';
}


// // // // // // // // // // // 
@Component({
  selector: 'after-view',
  template: `
    <div>-- child view begins --</div>
      <after-my-child></after-my-child>
    <div>-- child view ends --</div>
    
    <h4 *ngIf='comment' class='comment'>
      {{comment}}
    </h4>
  `
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private _prevHero: string = '';
  public comment: string = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  constructor(private _logger: LoggerService) {
    this._logIt('AfterViewComponent constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this._logIt('AfterViewInit');
    this._doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this._prevHero === this.viewChild.hero) {
      this._logIt('AfterViewChecked (no change)');
    } else {
      this._prevHero = this.viewChild.hero;
      this._logIt('AfterViewChecked');
      this._doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private _doSomething() {
    let c = this.viewChild.hero.length > 10 ? 'Thats a long name' : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      setTimeout(() => (this.comment = c), 0);
    }
  }

  private _logIt(method: string) {
    let vc = this.viewChild;
    let message = `'${vc ? vc.hero : 'no'}' child view`;
    this._logger.log(method + message);
    console.log('%c' + method, 'color:deeppink', message);
  }
}
