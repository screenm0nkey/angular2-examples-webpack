import {Component, EventEmitter} from 'angular2/core';

class Broadcaster extends EventEmitter<any> {}

@Component({
    selector: 'comp1',
    template: '<div>Generated number: {{ generatedNumber }}</div>',
})
class Comp1 {
    generatedNumber: number = 0;
    constructor(broadcaster: Broadcaster) {
        setInterval(() => {
            broadcaster.next(this.generatedNumber = Math.random());
        },1000);
    }
}


@Component({
    selector: 'comp2',
    template: '<div>Received number: {{ receivedNumber }}</div>',
})
class Comp2 {
    receivedNumber: number = 0;
    constructor(broadcaster: Broadcaster) {
        broadcaster.subscribe(generatedNumber => this.receivedNumber = generatedNumber);
    }
}


@Component({
    selector: 'emitter-component',
    viewProviders: [Broadcaster],
    directives: [Comp1, Comp2],
    template: `
    <div>
      <comp1></comp1>
      <comp2></comp2>
    </div>
  `
})
export class EmitterComponent {
    constructor() {}
}