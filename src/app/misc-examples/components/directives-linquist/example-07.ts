import {
  Component,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from "@angular/core";

/**
 * HooperDirective
 */
@Directive({
  selector: "[hooper]"
})
export class HooperDirective {
  count: number = 0;

  @Input() set hooperSpoonzOf({ one, two, three }) {
    if (++this.count === 5) {
      this.view.clear(); // this clears the view otherwise they would be added to the previous items
      this.count = 0;
    }
    this.view.createEmbeddedView(this.template, { $implicit: one });
    this.view.createEmbeddedView(this.template, { $implicit: two });
    this.view.createEmbeddedView(this.template, { $implicit: three });
  }

  constructor(
    el: ElementRef,
    public view: ViewContainerRef,
    public template: TemplateRef<any>
  ) {
    console.log(el.nativeElement);
  }
}

/**w
 * Example07AppComponent
 */
@Component({
  selector: "linquist-example-07",
  template: `
    <p class="path">
      misc-examples/components/directives-linquist/example-07.ts
    </p>
    <h4>Assign a structural directive dynamic content</h4>

    <p>See the example <dlink [id]="1005"></dlink> *ngBookRepeat template</p>

    <code
      ><lgt>span *hooper='let message spoonzOf messages'</lgt>{{ message
      }}<lgt>/span</lgt></code
    >

    <span>gets converted to</span>
    <code
      ><lgt>template [hooperSpoonzOf]='messages' let-message='$implicit'</lgt
      ><lgt>/template</lgt></code
    >

    <p>
      There's going to be an input called
      <highlight>hooperSpoonzOf</highlight> on the HooperDirective. It's a
      combination of the name of the directive, and the separator, which is
      going to take <highlight>messages</highlight> as the input. Remember,
      <highlight>let message</highlight> was used to declare a variable, and any
      word you put here is going to be an input which combines
      <highlight>*hooper</highlight> and <highlight>spoonzOf</highlight>
    </p>

    <p>
      Which means we have to change the input on the directive to
      <highlight>hooperSpoonzOf</highlight> and
      <highlight>this.messages</highlight> will be passed into the
      <highlight>hooperSpoonzOf input</highlight>
    </p>

    <div style="width:100%; height : 30px;overflow: scroll">
      <span *hooper="let message; spoonzOf: messages">{{ message }}</span>
    </div>
  `
})
export class Example07AppComponent implements OnInit, OnDestroy {
  interval: any;
  message: string;
  messages: any = {};

  ngOnInit() {
    this.interval = setInterval(() => this.assignMessages(), 1000);
  }

  assignMessages() {
    this.messages = {
      one: `One ${this.random()}`,
      two: `Two ${this.random()}`,
      three: `Three ${this.random()}`
    };
  }

  random(): string {
    return Math.random()
      .toString()
      .slice(0, 3);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
