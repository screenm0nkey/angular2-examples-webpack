import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div my-spy>...</div>
@Directive({selector: '[my-spy]'})
export class Spy implements OnInit, OnDestroy {
  constructor(public _logger: LoggerService) {
  }

  ngOnInit() {
    this._logIt(`onInit`);
  }

  ngOnDestroy() {
    this._logIt(`onDestroy`);
  }

  public _logIt(msg: string) {
    this._logger.log(`Spy #${nextId++} ${msg}`);
  }
}
