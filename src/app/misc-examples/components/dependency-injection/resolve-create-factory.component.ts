import {Component, ElementRef, Inject, InjectionToken, Injector, ViewChild} from '@angular/core';
import {ApiService, ViewPortService} from './injectables.service';

const SOME_TOKEN = new InjectionToken<string>(`SomeToken`);

@Component({
  selector: 'resolve-create-factory',
  template: `
    <p class='file'>misc-examples/components/dependency-injection/resolve-create-factory.ts</p>
    <h4>Manually Injecting a Factory with Dependencies</h4>
    <code><brace>
    provide: 'OtherSizeService',
    useFactory: (viewport: any) => <brace>
      return viewport.determineService();
    </brace>,
    deps: [ViewPortService, SOME_TOKEN]
  </brace></code>

    <button (click)='invokeApi()'>Invoke API</button>
    <button (click)='useInjectors()'>Use Injectors</button>
    <button (click)='useInjectors()'>Use Injectors</button>
    <p #reffy></p>
  `
})
export class DiSampleComponent2 {
  @ViewChild('reffy', {static: false}) el: ElementRef;

  constructor(private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService, // useExisting
              @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    this.addMessage(this.apiService.run());
    this.addMessage(this.aliasService.run()); // useExisting
    this.addMessage(this.sizeService.run());
  }

  useInjectors(): void {
    let injector: any = Injector.create([
      {
        provide: SOME_TOKEN,
        useValue: 'Im a InjectionToken, which you are manually injecting'
      },
      {provide: ViewPortService, useClass: ViewPortService, deps: []},
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any, token: string) => {
          console.log(`%c${token}`, 'color:mediumorchid');
          return viewport.determineService();
        },
        deps: [ViewPortService, SOME_TOKEN]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    this.addMessage(sizeService.run());
  }

  addMessage(msg: string) {
    this.el.nativeElement.innerHTML += `${msg}<br>`;
  }
}
