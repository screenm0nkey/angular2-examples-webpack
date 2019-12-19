// our root app component
import {Component, Input, Injectable} from '@angular/core';
@Injectable({providedIn:'root'})
export class SharedService {
  listeners = [];
  _text = '';

  onNameChange(fn) {
    this.listeners.push(fn);
  }

  set text(value) {
    this._text = value;
    this.listeners.forEach(fn => {
      fn(value);
    });
  }
}

@Component({
  selector: "shared-service-component",
  template: `
    <p class="file">
      misc-examples/components/changed-after-check/shared-service.component.ts
    </p>
    <h4>Shared Service</h4>
    <p>
      This pattern is illustrated by this plunker. The application is designed
      to have a service shared between a parent and a child component. A child
      component sets a value to the service which in turn reacts by updating the
      property on the parent component. I call this parent property update
      indirect because unlike in our example above it isn’t evident right away
      that a child component updates a parent component property.
    </p>

    <h1>Hello {{ name }}</h1>
    <b-comp [text]="text"></b-comp>
  `
})
export class SharedServiceComponent {
  name = "I am A component";
  text = "A message for the child component";

  constructor(sharedService: SharedService) {
    sharedService.onNameChange(value => {
      this.text = value;
    });
  }
}

@Component({
  selector: 'b-comp',
  template: `<span>{{name}}</span>`
})
export class BComponent {
  name = 'I am B component';
  @Input() text;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.text = 'updated name';
  }
}
