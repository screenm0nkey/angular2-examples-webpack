import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from 'rxjs';


export function NgLog(): ClassDecorator {
  return function (constructor: any) {
    // You can add/remove events for your needs
    const LIFECYCLE_HOOKS = [
      'ngOnInit',
      'ngOnChanges',
      'ngOnDestroy'
    ];
    const component = constructor.name;

    LIFECYCLE_HOOKS.forEach(hook => {
      const original = constructor.prototype[hook];

      constructor.prototype[hook] = (...args) => {
        console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
        original && original.apply(this, args);
      }
    });

  }
}

@NgLog()
@Component({
  selector: "custom-log-decorator",
  template: `
    <p class="path">src/app/misc-examples/components/decorators/custom-log-decorator.component.ts</p>
    <h4>Lifecycle Logger Decorators</h4>
    <p>See the console</p>
  `
})
export class CustomLogDecoratorComponent implements OnInit, OnDestroy {
  private one$: Subscription;

  constructor() { }

  ngOnInit() {
    this.one$ = interval(1000).subscribe();
  }

  ngOnDestroy() {
    this.one$.unsubscribe();
  }
}
