import {Component, Input} from "@angular/core";

/**
 * Parent
 */
@Component({
  selector: "inject-parent-component",
  template: `
    <p class="file">misc-examples/components/dependency-injection/inject-parent-component.ts</p>
    <h4>Injecting a parent component into a child</h4>
    <p>
      The example below was taken from <a
      href="https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4"
      target="_blank">here</a>.
    </p>
    <h6 style="margin:0">I'm the parent.</h6>
    {{text}}<br>
    {{name}}
    <inject-child-component [text]="text"></inject-child-component>
  `
})
export class ParentComponent {
  text: string = "A message for the child component";
  name: string = "I'm the parent component";
}


/**
 * Child
 */
@Component({
  selector: "inject-child-component",
  template: `
    <div style="border:solid 2px green;">
      <h6 style="margin:0">I'm the child.</h6>
      <strong>[@Input]</strong> {{text}} <br>
      <strong>[property on parent]</strong> {{parent.name}}
    </div>`
})
export class ChildComponent {
  @Input() text;

  constructor(private parent: ParentComponent) {
  }
}
