import {Component, Inject, ReflectiveInjector} from "@angular/core";
import {ApiService, ViewPortService} from "./services/more-services";

@Component({
  selector: 'resolve-create-factory',
  template: `
  <h4>Injecting a Service using ReflectiveInjector.resolveAndCreate</h4>
  <button (click)="invokeApi()">Invoke API</button>
  <button (click)="useInjectors()">Use Injectors</button>
  <p>Look at console</p>
  `
})
export class DiSampleApp2 {
  constructor(private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService,
              @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    console.clear();
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    console.clear();
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService, {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.determineService();
        },
        deps: [ViewPortService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }
}

