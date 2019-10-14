// our root app component
import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';

const TMPL = `
  <p class='file'>misc-examples/components/chickens/dynamic.component.ts</p>
  <h4>Dynamic component instantiation</h4>
  <div class='link'>
    <external-link [id]="70"></external-link>
  </div>

  <ul>
    <li><strong>ComponentFactoryResolver</strong> — service used to get the factory of the component we want to inject</li>
    <li><strong>ViewContainerRef</strong> — the container of the parent of our component.</li>
    <li><strong>createComponent(factory)</strong> is the part that actually injects our component into the
      viewContainerRef that calls it.</li>
    <li><strong>ref</strong> — Reference to the component we just injected. We call detectChanges on it so angular will call the
      necessary lifecycle hooks and start the change detection mechanism.
    </li>
  </ul>
  
  <h1>Hello {{name}}</h1>
  
  <ng-container #viewContainer></ng-container>
`;

/**
 * Component to be instantiated dynamically.
 * Notice that you don't need a selector
 */
@Component({
  template: `<span>{{name}}<br></span>`
})
export class InjectableComponent {
  name = 'I am a dynamically inserted component';
}


/**
 * DynamicComponent
 */
@Component({
  selector: 'dynamic-component',
  template: TMPL
})
export class DynamicComponent implements AfterViewInit {
  // ViewContainerRef is the container of the parent of this component.
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer;
  name: string = 'I am a Component';

  // ComponentFactoryResolver is used to get the factory of the component we want to inject
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(InjectableComponent);
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




