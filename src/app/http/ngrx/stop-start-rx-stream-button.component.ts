import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { mapTo, switchMapTo, takeUntil } from "rxjs/operators";
import { MyAction } from './reducers/_reducers.service';

@Component({
  selector: 'start-stop-rx-stream-component',
  template: `
    <button #start>Start Rx Stream</button>
    <button #stop>Stop Rx Stream</button>
  `
})
export class StartStopRxStreamComponent implements AfterViewInit {
  @Input() stream$: Observable<any>;
  @Output() evt = new EventEmitter();
  @ViewChild('start') startBtnEl: ElementRef;
  @ViewChild('stop') stopBtnEl: ElementRef;

  constructor() {
    this.setButtonState = this.setButtonState.bind(this);
  }

  ngAfterViewInit() {
    this.setButtonState('stop');

    const startBtnClick$: Observable<string> = fromEvent(this.startBtnEl.nativeElement, 'click')
      .pipe(mapTo('start'));
    startBtnClick$.subscribe(this.setButtonState);

    const stopBtnClick$: Observable<string> = fromEvent(this.stopBtnEl.nativeElement, 'click')
      .pipe(mapTo('stop'));
    stopBtnClick$.subscribe(this.setButtonState);

    const intervalThatStops$ = this.stream$.pipe(takeUntil(stopBtnClick$));
    const startInterval$ = startBtnClick$.pipe(switchMapTo(intervalThatStops$));

    startInterval$.subscribe((action: MyAction) => this.evt.emit(action));
  }

  setButtonState(state: string): void {
    this.startBtnEl.nativeElement.style.display = (state === 'stop') ? 'Block' : 'None';
    this.stopBtnEl.nativeElement.style.display = (state === 'stop') ? 'None' : 'Block';
  }
}
