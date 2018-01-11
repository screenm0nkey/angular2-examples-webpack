import {Component} from "@angular/core";

@Component({
  selector: "example-05",
  template: `
    <p class="file">misc-examples/components/directives-linquist/example-04.ts</p>
    <h4>Create elements with ngTemplateOutlet</h4>
    
    <pre>"let-" is only supported on "template elements"</pre>
    
    <ng-template #foo let-whatever="message">
      <span>{{whatever}}</span>
    </ng-template>
    
    <p>The div will serve as an outlet for the template with the local ref of #foo</p>
    <div
      [ngTemplateOutlet]="foo"
      [ngTemplateOutletContext]="one">
    </div>
    <div
      [ngTemplateOutlet]="foo"
      [ngTemplateOutletContext]="two">
    </div>
    <div
      [ngTemplateOutlet]="foo"
      [ngTemplateOutletContext]="three">
    </div>
  `
})
export class Example05AppComponent {
  one = {message: "Hello One"};
  two = {message: "Hello Two"};
  three = {message: "Hello Three"};
}
