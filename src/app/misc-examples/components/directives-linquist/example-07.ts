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
    public view: ViewContainerRef, // this is parent of the host element <div style="width:100%...
    public template: TemplateRef<any> // this is the span host element <span *hooper...></span>
  ) {
    console.log(1234, template.elementRef.nativeElement);
  }
}

/**w
 * Example07AppComponent
 */
@Component({
  selector: "linquist-example-07",
  templateUrl: './example-07.html'
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
