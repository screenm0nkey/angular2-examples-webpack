import {Component, Inject, ReflectiveInjector, ViewChild, ElementRef} from "@angular/core";
import {ApiService, ViewPortService} from "./services/more-services";

@Component({
  selector: 'resolve-create-factory',
  template: `
  <p class="file">misc-examples/components/dependency-injection/resolve-create-factory.ts</p>
  <h4>Manually Injecting a Factory with Dependencies</h4>
  <code>&#123;
    provide: 'OtherSizeService',
    useFactory: (viewport: any) => &#123;
      return viewport.determineService();
    &#125;,
    deps: [ViewPortService]
  &#125;</code>
  
  <button (click)="invokeApi()">Invoke API</button>
  <button (click)="useInjectors()">Use Injectors</button>
  <button (click)="useInjectors()">Use Injectors</button>
  <p #reffy></p>
  `
})
export class DiSampleApp2 {
  @ViewChild('reffy') el: ElementRef;

  constructor(private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService,//useExisting
              @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    this.addMessage(this.apiService.run());
    this.addMessage(this.aliasService.run());//useExisting
    this.addMessage(this.sizeService.run());
  }

  useInjectors(): void {
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.determineService();
        },
        deps: [ViewPortService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    this.addMessage(sizeService.run());
  }

  addMessage(msg: string) {
    this.el.nativeElement.innerHTML += `${msg}<br>`;
  }
}

