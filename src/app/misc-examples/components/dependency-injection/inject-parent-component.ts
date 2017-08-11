import {Component, Input} from "@angular/core";

@Component({
  selector: 'inject-parent-component',
  template: `
    <p class="file">misc-examples/components/dependency-injection/inject-parent-component.ts</p>
    <h4>Injecting a parent component into a child</h4>
    <p>
      The example below was taken from <a href="https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4" target="_blank">here</a>.
    </p>
     <p>
      I'm the parent<br>
      {{text}}<br>
      {{name}}
    </p>
    <b-component [text]="text"></b-component>
  `
})
export class InjectParentComponent {
  text: string = 'property binding using @Input';
  name: string = 'property on parent';
}




@Component({
  selector: 'b-component',
  template: `<div style="border:solid 2px green;">I'm the child. <br>{{text}} <br>{{parent.name}}</div>`
})
export class BComponent {
  @Input() text;

  constructor(private parent: InjectParentComponent) {
  }

  ngOnInit() {
    this.parent.text = 'updated text';
  }

  ngAfterViewInit() {
    this.parent.name = 'updated name';
  }
}

