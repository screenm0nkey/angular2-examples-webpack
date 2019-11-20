import {Component, ElementRef, Inject, InjectionToken, Injector, ViewChild} from '@angular/core';
import {ApiService, ViewPortService} from './injectables.service';

const SOME_TOKEN = new InjectionToken<string>(`SomeToken`);



@Component({
  selector: "resolve-create-factory",
  template: `
    <collapse-it
      ><p class="file">
        misc-examples/components/dependency-injection/resolve-create-factory.ts
      </p>
      <h4>Manually Injecting a Factory with Dependencies</h4>
      <code>
        <cur>
          provide: 'OtherSizeService', useFactory: (viewport: any) =>
          <cur>
            return viewport.determineService();
          </cur>
          , deps: [ViewPortService, SOME_TOKEN]
        </cur>
      </code>

      <button (click)="invokeApi()">Invoke services which are provided in the constructor</button>
      <button (click)="useInjectors()">Use Injectors</button>
      <p #reffy></p
    ></collapse-it>
  `
})
export class DiSampleComponent2 {
  @ViewChild("reffy", { static: false }) el: ElementRef;

  constructor(
    private apiService: ApiService,
    @Inject("ApiServiceAlias") private aliasService: ApiService, // provided in module
    @Inject("SizeService") private sizeService: any // factory provided in module
  ) {}

  invokeApi(): void {
    this.addMessage(this.apiService.run());
    this.addMessage(this.aliasService.run()); // useExisting
    this.addMessage(this.sizeService.run());
  }

  useInjectors(): void {
    const injector: any = Injector.create([
      {
        provide: SOME_TOKEN,
        useValue: "Im a InjectionToken, which you are manually injecting"
      },
      { provide: ViewPortService, useClass: ViewPortService, deps: [] },
      {
        provide: "OtherSizeService",
        useFactory: (viewport: any, token: string) => {
          console.log(`%c${token}`, "color:mediumorchid");
          return viewport.determineService();
        },
        deps: [ViewPortService, SOME_TOKEN]
      }
    ]);
    let sizeService: any = injector.get("OtherSizeService");
    this.addMessage(sizeService.run());
  }

  addMessage(msg: string) {
    this.el.nativeElement.innerHTML += `${msg}<br>`;
  }
}
