import {Component, EventEmitter} from '@angular/core';

class Broadcaster extends EventEmitter<any> {}

@Component({
  selector: 'comp1',
  template: '<div>Generated number: {{ generatedNumber }}</div>',
})
export class Comp1 {
  generatedNumber:number = 0;

  constructor(broadcaster:Broadcaster) {
    setInterval(() => {
      broadcaster.emit(this.generatedNumber = Math.random());
    }, 1000);
  }
}


@Component({
  selector: 'comp2',
  template: '<div>Received number: {{ receivedNumber }}</div>',
})
export class Comp2 {
  receivedNumber:number = 0;

  constructor(broadcaster:Broadcaster) {
    broadcaster.subscribe(generatedNumber => this.receivedNumber = generatedNumber);
  }
}


@Component({
  selector: 'emitter-component',
  viewProviders: [Broadcaster],
  template: `
    <div>
      <comp1></comp1>
      <comp2></comp2>
    </div>
  `
})
export class EmitterComponent {
  constructor() {
  }
}
