import { Component, Input, OnChanges, SimpleChanges, VERSION } from '@angular/core';


const enum ChangesStrategy {
  First = 'firstTime',
  Each = 'eachTime',
  NonFirst = 'nonFirst'
}

interface Descriptor {
  configurable: boolean;
  enumerable: boolean;
  value: (changes: SimpleChanges) => Function;
  writable: boolean;
}

export function TrackChanges<Type>(
  propertyName: string, // i.e. val1, val2 
  methodName: string, // parseVal1(val: number)
  strategy: ChangesStrategy = ChangesStrategy.Each): Function {
  return function (
    targetClass, //instance of HelloComponent
    functionName: string, // 'ngOnChanges
    descriptor: Descriptor,
  ): Descriptor {
    const source = descriptor.value;
    descriptor.value = function (changes: SimpleChanges): Function {
      if (changes && changes[propertyName] && changes[propertyName].currentValue !== undefined) {
        const isFirstChange = changes[propertyName].firstChange;
        if (strategy === ChangesStrategy.Each || (strategy === ChangesStrategy.First && isFirstChange) || (strategy === ChangesStrategy.NonFirst && !isFirstChange)) {
          targetClass[methodName].call(this, changes[propertyName].currentValue as Type);
        }
      }
      return source.call(this, changes);
    };
    return descriptor;
  };
}



@Component({
  selector: 'on-changes-detector',
  template: `
    <p class="path">src/app/misc-examples/components/decorators/example-onchanges-decorator.component.ts</p>
    <h4>On Changes Decorator</h4>  
    <dlink id="101"></dlink>
    <hello name="{{ name }}" [val1]="val1" [val2]="val2"></hello>
    <h3>{{subTitle}}</h3>
  `,
})
export class ExampleOnChangesDecoratorComponent {
  name = 'Angular ' + VERSION.major;
  subTitle = 'Tracking Changes';
  val1 = 100;
  val2 = 1000000;
}



@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <p>Item 1: {{data.item1}}</p>
    <p>Item 2: {{data.item2}}</p>
  `,
})
export class OnChangesDecoratorComponent implements OnChanges {
  @Input() name: string;
  @Input() val1: number;
  @Input() val2: number;
  data = {
    item1: null,
    item2: null
  }

  @TrackChanges<number>('val1', 'parseVal1')
  @TrackChanges<number>('val2', 'parseVal2')
  ngOnChanges(changes: SimpleChanges): void { }

  parseVal1(val: number): void {
    this.data.item1 = Math.random() * val;
  }

  parseVal2(val: number): void {
    this.data.item2 = Math.random() * val;
  }
}
