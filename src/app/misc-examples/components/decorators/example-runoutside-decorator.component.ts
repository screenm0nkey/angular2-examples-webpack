import { Component, Input, NgZone, OnChanges, SimpleChanges, VERSION } from '@angular/core';

interface Descriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value: () => Function;
  writable: boolean;
}


export function OutsideZone(targetClass, functionName: string, descriptor: any): Descriptor {
  const source = descriptor.value;

  descriptor.value = function (...data): Function {
    if (!this.ngZone) {
      throw new Error("Class with 'OutsideZone' decorator should have 'ngZone' class property with 'NgZone' class.");
    }
    return this.ngZone.runOutsideAngular(() => source.call(this, ...data));
  };
  return descriptor;
}




@Component({
  selector: 'shoshossho',
  template: `
    <p class="path">src/app/misc-examples/components/decorators/example-runoutside-decorator.component.ts</p>
    <h4>Run outside ngZone Decorator</h4>  
    <dlink id="101"></dlink>
    <h1>Hello {{name}}!</h1>
    `,
})
export class HelloComponent {
  @Input() name: string;
}




@Component({
  selector: 'my-apsssp',
  template: `
    <shoshossho name="{{ name }}"></shoshossho>
    <h3>{{subTitle}}</h3>
    <p>{{ description }}</p>
    <button (click)="onChange()">Change text</button>
  `,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  subTitle = 'Outsidezone Calculation';
  description = 'Start editing to see some magic happen :)';

  constructor(private ngZone: NgZone) { }

  onChange(): void {
    this.name = 'World';
    this.changeDescription();
  }

  @OutsideZone
  changeDescription(): void {
    setTimeout(() => {
      this.description = 'Lorem ipsum';
    }, 3000);
  }
}

