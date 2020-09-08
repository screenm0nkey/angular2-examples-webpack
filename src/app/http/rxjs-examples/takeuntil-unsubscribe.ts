import { Component, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TUSTestService {
  observableA: Subject<any> = new Subject();
  observableB: Subject<any> = new Subject();
}

export class BaseComponent implements OnDestroy {
  destroyed = new Subject();
  constructor() { }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

@Component({
  selector: 'takeuntil-unsubscribe',
  template: `
        <p class='path'>src/app/http/rxjs-examples/takeuntil-unsubscribe.ts</p>
        <h4>Manage your unsubscription with the class inheritance feature</h4>
        <p>Add a subject to notify the destruction of the component. As a result, we can declare the life time of our subscriptions at the moment when we create them.</p>
        `
})
export class takeuntilUnsubscribe extends BaseComponent {
  constructor(
    private testService: TUSTestService
  ) {
    super();
    testService.observableA
      .pipe(takeUntil(this.destroyed))
      .subscribe(val => {
        console.log(val);
      })
    testService.observableB
      .pipe(takeUntil(this.destroyed))
      .subscribe(val => {
        console.log(val);
      });
  }
}
