import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';


@Component({
  selector: 'start-stop-rx-stream-component',
  template: `
    <button #start>Start Rx Stream</button>
    <button #stop>Stop Rx Stream</button>
  `
})
export class StartStopRxStreamComponent implements OnInit {
  @Input() stream$: Observable<any>;
  @Output() evt = new EventEmitter();
  @ViewChild('start') startBtnEl: ElementRef;
  @ViewChild('stop') stopBtnEl: ElementRef;

  constructor() {
    this.setButtonState = this.setButtonState.bind(this);
  }

  ngOnInit() {
    this.setButtonState('stop');
  }

  ngAfterViewInit() {
    const startBtnClick$: Observable<string> = fromEvent(this.startBtnEl.nativeElement, 'click').mapTo('start');
    const stopBtnClick$: Observable<string> = fromEvent(this.stopBtnEl.nativeElement, 'click').mapTo('stop');
    const intervalThatStops$ = this.stream$.takeUntil(stopBtnClick$);
    const startInterval$ = startBtnClick$.switchMapTo(intervalThatStops$);
    startBtnClick$.subscribe(this.setButtonState);
    stopBtnClick$.subscribe(this.setButtonState);
    startInterval$.subscribe(value => this.evt.emit(value));
  }

  setButtonState(state: string): void {
    this.startBtnEl.nativeElement.style.display = (state === 'stop') ? 'Block' : 'None';
    this.stopBtnEl.nativeElement.style.display = (state === 'stop') ? 'None' : 'Block';
  }
}
