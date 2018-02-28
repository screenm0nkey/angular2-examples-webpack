//our root app component
import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from "@angular/core";

const TMPL = `
  <p class="file">misc-examples/components/chickens/dynamic.component.ts</p>
  <h4>Dynamic component instantiation</h4>
  <div class="link">
    <a href="https://medium.com/@tudorgergely/injecting-components-dynamically-in-angular-2-3d36594d49a0">Dynamic
      Comps</a>
  </div>

  <ul>
    <li><strong>ComponentFactoryResolver</strong> — service used to get the factory of the component we want to inject
    </li>
    <li><strong>ViewContainerRef</strong> — the container of the parent of our component.</li>
    <li><strong>createComponent(factory)</strong> is the part that actually injects our component into the
      viewContainerRef that calls it.
    </li>
    <li>ref — Reference of the component we just injected. We call detectChanges on it so angular will call the
      necessary lifecycle hooks and start the change detection mechanism.
    </li>
  </ul>
  <h1>Hello {{name}}</h1>
  <ng-container #vc></ng-container>
`;

/**
 * Component to be instantiated dynamically.
 * Notice that you don't need a selector
 */
@Component({
  template: `<span>{{name}}<br></span>`
})
export class DComponent {
  name = "I am a dynamically inserted component";
}


/**
 *
 */
@Component({
  selector: "dynamic-component",
  template: TMPL
})
export class DynamicComponent implements AfterViewInit {
  @ViewChild("vc", {read: ViewContainerRef}) vc;
  name: string = "I am a Component";

  constructor(private r: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    const f = this.r.resolveComponentFactory(DComponent);
    let ref = this.vc.createComponent(f);
    ref.changeDetectorRef.detectChanges();
    ref = this.vc.createComponent(f);
    ref.changeDetectorRef.detectChanges();
  }
}




