import {Component} from '@angular/core'

@Component({
  selector: 'example-05',
  template: `
    <h4>Create elements with ngTemplateOutlet</h4>
    <pre>"let-" is only supported on template elements</pre>
    <template #foo let-whatever="message">
    <span>{{whatever}}</span>
    </template>
    
    <div 
        [ngTemplateOutlet]="foo"
        [ngOutletContext]="one">    
    </div>
    <div 
        [ngTemplateOutlet]="foo"
        [ngOutletContext]="two">    
    </div>
    <div 
        [ngTemplateOutlet]="foo"
        [ngOutletContext]="three">    
    </div>
  `
})
export class Example5AppComponent {
  one = {message: 'Hello One'}
  two = {message: 'Hello Two'}
  three = {message: 'Hello Three'}
}
