import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

/**
 * Component to be instantiated dynamically.
 * Notice that you don't need a selector
 */
@Component({
  template: `
    <strong>{{ name }}<br /></strong>
  `
})
export class InjectableComponent {
  name = "Hey, I am a dynamically inserted component 01";
}

/**
 * Dynamic01Component
 */
@Component({
  selector: "dynamic-component-example-01",
  template: `
    <section collapse-it>
      <p class="file">
        src/app/misc-examples/components/chickens/dynamic-01.component.ts
      </p>
      <h4>
        Dynamic component creation using @ViewChild and ComponentFactoryResolver
      </h4>
      <div class="link">
        <dlink [id]="70"></dlink>
      </div>

      <ul>
        <li>
          <highlight>ComponentFactoryResolver</highlight> — service used to get
          the factory of the component we want to inject
        </li>
        <li>
          <highlight>ViewContainerRef</highlight> — the container of the parent
          of our component.
        </li>
        <li>
          <highlight>createComponent(factory)</highlight> is the part that
          actually injects our component into the viewContainerRef that calls
          it.
        </li>
        <li>
          <highlight>ref</highlight> — Reference to the component we just
          injected. We call detectChanges on it so angular will call the
          necessary lifecycle hooks and start the change detection mechanism.
        </li>
      </ul>
      <div class="example">
        <ng-container #viewContainer></ng-container>
      </div>   
    </section>
  `
})
export class Dynamic01Component implements AfterViewInit {
  // ViewContainerRef is the container of the parent of this component.
  @ViewChild("viewContainer", { read: ViewContainerRef, static: false }) viewContainer;

  // ComponentFactoryResolver is used to get the factory of the component we want to inject
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      InjectableComponent
    );
    // createComponent(factory) is the part that actually injects the component into the viewContainerRef.
    let ref = this.viewContainer.createComponent(factory);
    // ref is the component we injected
    // We call detectChanges on it so angular will call the necessary lifecycle hooks and start the change detection mechanism.
    ref.changeDetectorRef.detectChanges();
    // create another instance of the component and inject it.
    ref = this.viewContainer.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}