import {Component, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
class BroadcasterService {
  subject: Subject<any> = new Subject<any>();

  emit(val) {
    this.subject.next(val);
  }

  subscribe(func) {
    this.subject.subscribe(func);
  }
}

@Component({
  selector: 'comp1',
  template: '<div>Generated number: {{ generatedNumber }}</div>'
})
export class EmitterSub1Component {
  generatedNumber: number = 0;

  constructor(broadcaster: BroadcasterService) {
    setInterval(() => {
      broadcaster.emit((this.generatedNumber = Math.random()));
    }, 1000);
  }
}

@Component({
  selector: 'comp2',
  template: '<div>Received number: {{ receivedNumber }}</div>'
})
export class EmitterSub2Component {
  receivedNumber: number = 0;

  constructor(broadcaster: BroadcasterService) {
    broadcaster.subscribe(
      generatedNumber => (this.receivedNumber = generatedNumber)
    );
  }
}

@Component({
  selector: 'emitter-component',
  viewProviders: [BroadcasterService],
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
