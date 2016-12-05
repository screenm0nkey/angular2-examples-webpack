import {Component, Injectable, ReflectiveInjector} from "@angular/core";
import {ParamService} from './some-service';

@Injectable()
export class MyService {
  getValue(): string {
    return 'a value';
  }
}

@Component({
  selector: 'di-sample-app',
  template: `
  <button (click)="invokeService()">Get Value</button>
  `
})
export class DiSampleApp {
  myService: MyService;

  constructor(public ps: ParamService) {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    // Notice that, since we’re using our own injector, we didn’t have to add MyService to the NgModule
    // providers list as we’re used to during bootstrapping:
    console.log('Same instance?', this.myService === injector.get(MyService));
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }
}
