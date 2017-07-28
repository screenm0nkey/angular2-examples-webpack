import {Component, Injectable, ReflectiveInjector} from "@angular/core";
import {ParamService} from "./services/some-service";

@Injectable()
export class MyService {
  getValue(): string {
    return 'a value';
  }
}

@Component({
  selector: 'resolve-create-service',
  template: `
  <p class="file">misc-examples/components/dependency-injection/resolve-create-service.ts</p>
  <h4>Injecting a Service using ReflectiveInjector.resolveAndCreate</h4>
  
  <button (click)="invokeService()">Click here to inject a token</button>
  <p>Look at console</p>
  `
})
export class DiSampleApp {
  myService: MyService;

  constructor(public ps: ParamService) {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    // Notice that, since we’re using our own injector, we didn’t have to add MyService to the NgModule
    // providers list as we’re used to during bootstrapping:
    console.log(888, 'Same instance?', this.myService === injector.get(MyService));
  }

  invokeService(): void {
    console.clear();
    console.log('MyService returned', this.myService.getValue());
  }
}
