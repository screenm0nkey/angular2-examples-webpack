import { Component, Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[first]'
})
export class FirstDirective {
  // innerText is a property of the <p> tag dom element
  @HostBinding() innerText = `I'm a directive!`;
}

@Component({
  selector: 'linquist-example-01',
  template: `
    <p class="path">misc-examples/components/directives-linquist/example-01</p>
    <h4>First Directive - Binding to the innerText Property of the host element</h4>
    <p first>This will be replaced</p>
    <p>This will not be replaced</p>
    <p first>This will be replaced</p>
  `
})
export class Example01AppComponent {
}
