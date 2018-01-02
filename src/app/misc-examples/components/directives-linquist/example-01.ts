import {Component, Directive, HostBinding} from "@angular/core";

@Directive({
  selector: "[first]"
})
export class FirstDirective {
  // innerText is a a property of the <p> tag dom element
  @HostBinding() innerText = `I'm a directive!`;
}

@Component({
  selector: "example-01",
  template: `
    <p class="path">src/app/misc-examples/components/directives-linquist/example-01</p>
    <p first>This will be replaced</p>
    <p>No first here</p>
    <p first>This will be replaced</p>
  `
})
export class Example01AppComponent {
}
