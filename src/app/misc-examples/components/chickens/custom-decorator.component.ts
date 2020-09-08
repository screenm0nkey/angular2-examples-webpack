import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval } from 'rxjs';


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

      constructor.prototype[hook] = function (...args) {
        console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
        original && original.apply(this, args);
      }
    });

  }
}

@NgLog()
@Component({
  selector: "custom-decorator",
  template: `
    <p class="path"></p>
    <h4>Custom Decorators</h4>
    <p>Note: Custom decorators are not working on lifecycle methods Custom decorators using AoT and Ivy see here <a href="https://github.com/angular/angular/issues/31495#">Link</a>
    </p>

    
  `
})
export class CustomDecorator implements OnInit, OnDestroy {
  one$;

  constructor() { }

  ngOnInit() {
    // this.one$ = interval(1000).subscribe(data => console.log(1, data));
  }

  ngOnDestroy() {
    // this.one$.unsubscribe();
  }
}
