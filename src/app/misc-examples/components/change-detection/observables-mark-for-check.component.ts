import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'observable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div>Total items: {{counter}}</div>
    </div>
  `
})
export class ObservableCmp {
  @Input() items: Observable<number>;
  counter = 0;

  constructor(public changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe(v => {
      console.log('%cGot observable value ' + v, 'color:violet');
      this.counter++;
      this.changeDetector.markForCheck();
    });
  }
}

@Component({
  selector: 'observable-change-detection-sample-app',
  template: `
    <p class='file'>/misc-examples/components/change-detection/observables.ts</p>
    <h4>changeDetector.markForCheck() with Observables</h4>
    <observable [items]='itemObservable'></observable>
  `
})
export class ObservableChangeDetectionSampleApp {
  itemObservable: Observable<number>;

  constructor() {
    const delay = 100;
    const repeatMs = 200;
    this.itemObservable = timer(delay, repeatMs).pipe(take(5));
  }
}
