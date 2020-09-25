import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
  Directive,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appCardHeader]"
})
export class CardHeaderDirective { }

@Component({
  selector: "app-card",
  template: `
    <div class="card">
        <div class="header" *ngIf="header">
            <ng-content select="[appCardHeader]"></ng-content>
            <hr>
        </div>
    </div>
  `
})
export class CardComponent {
  @ContentChild(CardHeaderDirective) header?: CardHeaderDirective;
  constructor() { }
}

@Component({
  selector: "app-card-container",
  template: `
    <h4>Understaning how <cur>static:false/true</cur> works with ViewChild and ContentChild</h4>
    <dlink [id]="83"></dlink>
    <ul>
        <li><code>static: true </code> needs to be set when you want to access the ViewChild in ngOnInit.</li>
        <li><code>static: false</code> can only be accessed in ngAfterViewInit. This is also what you want to go for when you have a structural directive (i.e. *ngIf) on your element in your template.</li>
        <li>It only applies to @ViewChild and @ContentChild detectors. @ViewChildren and @ContentChildren don’t work with the concept of static and dynamic. In this case the query is always dynamic.</li>
        <li>If you are used to work with ngAfterViewInit/ ngAfterContentInitanyways, you will be happy with  <cur>static: false</cur> .</li>
        <li>The feature was included to be able to embed views on the go. In case you need to access TemplateRef in a query for dynamic view creation, you can’t do this in ngAfterViewInit. You will get an ExpressionHasChangedAfterChecked error, as change detection has already run. This is a case where you should set <cur>static: true</cur> and create the view in ngOnInit.</li>
        <li>If you are a library author, you should get familiar with the inner workings of the static property. The early adoption of the migration will facilitate your users to work with the Ivy Renderer in Angular 9 (aproximatly coming beginning Q4 2019).</li>
        <li>In Angular version 9 and later, it will be safe to remove any <cur>static: false</cur> flags and we will do this cleanup for you in a schematic.</li>
        <li>more specifically if the element needs to be available during ngOnInit, then static needs to be true, but if it can wait until after the init it can be false, which means it won’t be available until ngAfterViewInit.</li>
    </ul>

    <app-card>
      <h2 appCardHeader>@ContentChild</h2>
    </app-card>
  `
})
export class CardComponentContainer implements OnInit, AfterViewInit {
  // changing static to false means the card won't be available in ngOnInit
  @ViewChild(CardComponent, { static: true }) card: CardComponent;

  name = "Angular";

  ngOnInit(): void {
    console.log("ngOnInit Card Component is:", this.card);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Card Component is: ", this.card);
  }
}
