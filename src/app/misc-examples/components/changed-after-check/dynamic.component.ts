// our root app component
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "d-comp",
  template: `
    <strong>{{ name }}<br /></strong>
  `
})
export class MyInjectableComponent {
  name = "I am dynamically inserted component";
}

@Component({
  selector: "dynamic-component-example-01",
  template: `
    <p class="file">
      misc-examples/components/changed-after-check/dynamic.component.ts
    </p>
    <h4>
      Dynamic component creation using @ViewChild and ViewContainerRef and
      <lgt>ng-container #vc</lgt>
    </h4>
    <code
      >@ViewChild('vc',
      <cur>read: ViewContainerRef, static: false</cur>
      ) public vc: ViewContainerRef;</code
    >
    <p>
      <dlink [id]="66"></dlink>
    </p>
    <p>
      This pattern is different because unlike the previous ones where input
      bindings were affected, this pattern causes DOM update operation to throw
      the error. The application is designed to have a parent component that
      dynamically adds a child component in the ngAfterViewInit. Since adding a
      child component requires DOM modification and ngAfterViewInit lifecycle
      hook is triggered after the Angular updated DOM the error is thrown.
    </p>
    <ng-container #vcr></ng-container>
  `
})
export class DynamicComponent implements AfterViewInit {
  @ViewChild('vcr', { read: ViewContainerRef }) public viewContainer: ViewContainerRef;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyInjectableComponent);
    this.viewContainer.createComponent(factory);
    this.viewContainer.createComponent(factory);
    this.viewContainer.createComponent(factory);
    // If you run detectChanges here, it will fix it
    // this.cdRef.detectChanges();
  }


}

