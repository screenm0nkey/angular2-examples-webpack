import {
  Component,
  Injector,
  InjectionToken,
  OnInit
} from "@angular/core";

const BMW_TOKEN = new InjectionToken<string>('BMWToken');

@Component({
  selector: "manual-injection-example",
  template: `
    <collapse-it>
      <p class="path">
        src/app/misc-examples/components/dependency-injection/factory-examples.component.ts
      </p>
      <h4>Notes on Manually injecting dependencies</h4>
    </collapse-it>
  `
})
export class ManualInjectionExamplesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // notice that BMW_TOKEN is already declared as a token but this becomes a child token
    // so you wont see any values provided above.
    const injector: any = Injector.create([
      { provide: BMW_TOKEN, useValue: 'BMW one', multi: true },
      { provide: BMW_TOKEN, useValue: 'BMW two', multi: true }
    ]);
    const dependencies = injector.get(BMW_TOKEN);
    console.log('%cInjector.create() BMW_TOKEN', 'color:mediumorchid', dependencies);
  }


}
