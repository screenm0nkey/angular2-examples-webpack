import { Component, Directive, ElementRef, ViewContainerRef, TemplateRef, Input } from '@angular/core'

@Directive({
  selector: '[seven]'
})
export class SevenDirective{
  count : number = 0;

  @Input() set sevenFrom({one, two, three}){
    if (++this.count === 5) {
      this.view.clear();
      this.count = 0;
    }

    this.view.createEmbeddedView(this.template, {
      $implicit:one
    });
    this.view.createEmbeddedView(this.template, {
      $implicit:two
    });
    this.view.createEmbeddedView(this.template, {
      $implicit:three
    });
  }

  constructor(
    el:ElementRef,
    private view:ViewContainerRef,
    private template:TemplateRef<any>
  ){
    console.log(el.nativeElement)
  }
}

@Component({
  selector: 'example-07',
  template: `
    <h4>Assign a structural directive dynamic content</h4>
    <span *seven="let message from messages">{{message}}</span>    
  `
})
export class Example07AppComponent{
  messages = {
    one: 'One is awesome',
    two: 'Two is better',
    three: 'Three is best!'
  };

  constructor(){
    setInterval(()=>{
      this.messages = {
        one: ' One ' + Math.random().toString().slice(0,3),
        two: '  Two ' + Math.random().toString().slice(0,3),
        three: ' Three ' + Math.random().toString().slice(0,3)
      }
    }, 1000);
  }
}
