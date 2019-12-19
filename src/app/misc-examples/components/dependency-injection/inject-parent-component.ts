import {Component, Input} from '@angular/core';

/**
 * Parent
 */
@Component({
  selector: 'inject-parent-component',
  template: `
      <collapse-it><p class='file'>misc-examples/components/dependency-injection/inject-parent-component.ts</p>
          <h4>Injecting a parent component into a child</h4>
          <p>
              The example below was taken from
              <dlink [id]="45"></dlink>
              .
          </p>
          <h6 style='margin:0'>I'm the parent.</h6>
          {{text}}<br>
          {{name}}
          <inject-child-component [text]='text'></inject-child-component>
      </collapse-it>
  `
})
export class InjectParentComponent {
  text: string = 'A message for the child component';
  name: string = 'Im the parent component';
}


/**
 * Child
 */
@Component({
  selector: 'inject-child-component',
  template: `
    <div style='border:solid 2px green;'>
      <h6 style='margin:0'>I'm the child.</h6>
      <highlight>[@Input]</highlight> {{text}} <br>
      <highlight>[property on parent]</highlight> {{parent.name}}
    </div>`
})
export class InjectParentInChildComponent {
  @Input() text;

  constructor(public parent: InjectParentComponent) {
  }
}
