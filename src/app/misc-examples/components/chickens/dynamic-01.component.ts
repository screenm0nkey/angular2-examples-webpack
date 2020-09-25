import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  TemplateRef
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
export class MyInjectableComponent01 {
  name = "Hey, I am a dynamically inserted component 01";
}

/**
 * Dynamic01Component
 */
@Component({
  selector: "dynamic-component-example-01",
  template: `
    <section collapse-it>
      <p class="path">
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
          <highlight>componentReference</highlight> — Reference to the component we just
          injected. We call detectChanges on it so angular will call the
          necessary lifecycle hooks and start the change detection mechanism.
        </li>
      </ul>
      <br>
      <p>Notice in the code we call <code>changeDetectorRef.detectChanges()</code> on the newly created component instance. 
      This can also be done by importing <code>ChangeDetectorRef</code> and doing it in bulk. See <strong>dynamic-02.component.ts</strong></p>

      <div class="example">
        <ng-container #vcr></ng-container>
      </div>   
    </section>
  `
})
export class Dynamic01Component implements AfterViewInit {
  // ViewContainerRef is the container of the parent of this component.
  @ViewChild("vcr", { read: ViewContainerRef }) public viewContainerRef: ViewContainerRef;

  // ComponentFactoryResolver is used to get the factory of the component we want to inject
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    //Create a factory for the component you wish to inject
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyInjectableComponent01);

    // createComponent(factory) is the part that actually injects the component into the viewContainerRef.
    // componentReference is the component we injected
    let componentReference = this.viewContainerRef.createComponent(factory);

    // We call detectChanges on it so angular will call the necessary 
    // lifecycle hooks and start the change detection mechanism.
    // Also without calling it, you will get ExpressionChangedAfterItHasBeenCheckedError
    componentReference.changeDetectorRef.detectChanges();
    // create another instance of the component and inject it.
    componentReference = this.viewContainerRef.createComponent(factory);
    componentReference.changeDetectorRef.detectChanges();
  }
}
