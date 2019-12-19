import {Component} from '@angular/core';

@Component({
  selector: 'linquist-example-05',
  template: `
    <p class='file'>misc-examples/components/directives-linquist/example-05.ts</p>
    <h4>Create elements with ngTemplateOutlet</h4>

    <dlink [id]="85"></dlink>
    
    <pre>'let-' is only supported on 'template elements'</pre>
    
    <ng-template #foo let-whatever='message', let-color='colour'>
      <span [style.background-color]="color">{{whatever}} {{color}}</span>
    </ng-template>
    
    <p>The div will serve as an outlet for the template with the local ref of #foo</p>
    <div
      [ngTemplateOutlet]='foo'
      [ngTemplateOutletContext]='one'>
    </div>
    <div
      [ngTemplateOutlet]='foo'
      [ngTemplateOutletContext]='two'>
    </div>
    <div
      [ngTemplateOutlet]='foo'
      [ngTemplateOutletContext]='three'>
    </div>
  `
})
export class Example05AppComponent {
  one = {message: 'Hello One', colour: 'red'};
  two = {message: 'Hello Two', colour: 'gold'};
  three = {message: 'Hello Three', colour: 'green'};
}
