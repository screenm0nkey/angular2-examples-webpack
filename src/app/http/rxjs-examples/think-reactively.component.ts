import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, timer } from "rxjs";
import { RxJsSpinner } from './think-reactively-spinner.service';


@Component({
  selector: 'think-reactively',
  template: `
    <h4>Building a spinner and load info with RxJs</h4>
    <p class="path">src/app/http/rxjs-examples/think-reactively.component.ts</p>

    <button (click)="doWork(300)">300ms</button>
    <button (click)="doWork(3000)">3000ms</button>
    <button (click)="doWork(10000)">10000ms</button>
    <button (click)="doWork(20000)">20000ms</button>

    <h2>Request Count = {{spinner.count$ | async}}</h2>
    <h2>{{spinner.spinner$ | async}}</h2>
    <h2>Percentage complete {{spinner.percentage$ | async}}</h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThinkReactivelyComponent implements OnInit {
  timer: Observable<number>;
  constructor(public spinner: RxJsSpinner) {
  }

  ngOnInit() { }

  getTimer(ms) {
    return timer(ms)
  }

  doWork(ms: number) {
    timer(ms).pipe(this.spinner.init()).subscribe()
  }



}
