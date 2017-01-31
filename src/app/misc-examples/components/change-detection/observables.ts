import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

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

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 == 0) {
        this.changeDetector.markForCheck();
      }
    }, null, () => {
      this.changeDetector.markForCheck();
    });
  }
}

@Component({
  selector: 'observable-change-detection-sample-app',
  template: `
  <h4>Change detection using Observable</h4>
  <observable [items]="itemObservable"></observable>
  `
})
export class ObservableChangeDetectionSampleApp {
  itemObservable: Observable<number>;

  constructor() {
    const delay = 100;
    const repeatMs = 200;
    this.itemObservable = Observable.timer(delay, repeatMs).take(20);
  }
}

