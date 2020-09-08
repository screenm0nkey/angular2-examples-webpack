import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange
} from '@angular/core';
import { LoggerService } from '../logger.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  // this instance of the _logger is the same as the parent
  constructor(public _logger: LoggerService) {
  }

  // Initialize the directive/component after Angular initializes the data-bound input properties.
  ngOnInit() {
    this._logIt(`OnInit`);
  }

  public _logIt(msg: string) {
    this._logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my hero, {{name}}</p>',
  styles: ['p {background: LightYellow; padding: 8px}']
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent
  extends PeekABoo
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string;
  public _verb = 'initialized';

  constructor(logger: LoggerService) {
    // super() calls the constructor of the PeekABoo class
    super(logger);
    let is = this.name ? 'is' : 'is not';
    this._logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name' ) {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this._verb} to '${name}'`);
      } else {
        changesMsgs.push(propName + ' ' + this._verb);
      }
    }
    this._logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this._verb = 'changed'; // next time$ it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this._logIt(`DoCheck`);
  }

  // After Angular projects external content into its view.
  ngAfterContentInit() {
    this._logIt(`AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this._logIt(`AfterContentChecked`);
  }

  // After Angular creates the component's view(s).
  ngAfterViewInit() {
    this._logIt(`AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this._logIt(`AfterViewChecked`);
  }

  // Cleanup just before Angular destroys the directive/component.
  // Unsubscribe observables and detach event handlers to avoid memory leaks.
  ngOnDestroy() {
    this._logIt(`OnDestroy`);
  }
}
