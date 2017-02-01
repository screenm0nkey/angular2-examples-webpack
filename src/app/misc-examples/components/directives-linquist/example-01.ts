import {Component, Directive, HostBinding} from "@angular/core";

@Directive({
  selector: '[first]'
})
export class FirstDirective {
  @HostBinding() innerText = `I'm a directive!`
}

@Component({
  selector: 'example-01',
  template: `
<h4 first>Hello, Angular</h4>
<h2>No first here</h2>
<h3 first>This will be gone</h3>
    `
})
export class Example01AppComponent {
}
