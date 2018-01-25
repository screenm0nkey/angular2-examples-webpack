import {Component, Directive, ElementRef, Input, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";


/**
 * HooperDirective
 */
@Directive({
  selector: "[hooper]"
})
export class HooperDirective {
  count: number = 0;

  @Input()
  set hooperSpoonzOf({one, two, three}) {
    if (++this.count === 5) {
      this.view.clear();//this clears the view otherwise they would be added to the previous items
      this.count = 0;
    }
    this.view.createEmbeddedView(this.template, {$implicit: one});
    this.view.createEmbeddedView(this.template, {$implicit: two});
    this.view.createEmbeddedView(this.template, {$implicit: three});
  }

  constructor(el: ElementRef, private view: ViewContainerRef, private template: TemplateRef<any>) {
    console.log(el.nativeElement);
  }
}


/**w
 * Example07AppComponent
 */
@Component({
  selector: "example-07",
  template: `
    <p class="path">misc-examples/components/directives-linquist/example-07.ts</p>
    <h4>Assign a structural directive dynamic content</h4>

    See the example <a routerLink="../templates">Custom *ngBookRepeat template</a>
    
    <pre>&lt;span *hooper="let message spoonzOf messages"&gt;{{message}}&lt;/span&gt;</pre>
    <b>gets converted to</b>
    <pre>&lt;template [hooperSpoonzOf]="messages" let-message="$implicit"&gt;&lt;/template&gt;</pre>
    <br>
    <p>There's going to be an input called <code>hooperSpoonzOf</code> on the HooperDirective, a combination of the name of the
      directive, and the separator, which is going to take <code>messages</code> as the input. Remember, 
      <code>let message</code> was used to declare
      a variable, and any word you put here
      is going to be an input which combines <code>*hooper</code> and <code>spoonzOf</code></p>

    <p>Which means we have to change the input on the directive to <code>hooperSpoonzOf</code> and
      <code>this.messages</code> will be passed into the <code>hooperSpoonzOf input</code> </p>
    
    <div style="width:100%; height : 30px;overflow: scroll">
      <span *hooper="let message spoonzOf messages">{{message}}</span>
    </div>
    
  `
})
export class Example07AppComponent implements OnDestroy {
  interval: any;
  messages = {
    one: "One is awesome",
    two: "Two is better",
    three: "Three is best!"
  };

  constructor() {
    this.interval = setInterval(() => {
      this.messages = {
        one: `One ${this.random()}`,
        two: `Two ${this.random()}`,
        three: `Three ${this.random()}`,
      };
    }, 1000);
  }

  random(): string {
    return Math.random().toString().slice(0, 3);
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
