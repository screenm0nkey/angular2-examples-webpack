//our root app component
import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'e-comp',
  template: `
        <span>{{name}}</span>
    `
})
export class EComponent {
  name = 'I am E component';
  @Input() text;
  @Output() change = new EventEmitter();
  ngOnInit() {
    this.change.emit('updated text');
  }
}

@Component({
  selector: 'event-broadcasting',
  template: `
      <p class="file">src/app/misc-examples/components/changed-after-check/event-broadcasting.ts</p>
      <h4>Synchronous event broadcasting</h4>
      <p>
        This pattern is illustrated by this plunker. The application is designed to have a child component emitting 
        an event and a parent component listening to this event. The event causes some of the parent properties to 
        be updated. And these properties are used as input binding for the child component. This is also an indirect 
        parent property update.
      </p>
      <h1>Hello {{name}}</h1>
      <e-comp [text]="text" (change)="update($event)"></e-comp>
  `,
})
export class EventBroadcastingComponent {
  name = 'I am A component';
  text = 'A message for the child component';
  update(value) {
    this.text = value;
  }
}
