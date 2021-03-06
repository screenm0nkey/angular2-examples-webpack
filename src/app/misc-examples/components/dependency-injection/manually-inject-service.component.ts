import { AfterViewInit, Component, ElementRef, Injectable, Injector, ViewChild } from '@angular/core';

@Injectable({ providedIn: 'root' })
class TheLovelyService {
  getValue(): string {
    return (Math.round(Math.random() * 10) + ' Im a value from an injected service');
  }
}

@Component({
  selector: 'manually-inject-service',
  template: `
    <p class="path">misc-examples/components/dependency-injection/manually-inject-service.ts</p>
    <h4>Manually Injecting a Service using Injector.create()</h4>
    <code>Injector.create([<cur>provide: MyService, useClass: MyService, deps: []</cur>])</code>

    <p class='highlight'>
    Notice in the code, since we’re using our own injector, we didn’t have to add MyService to the NgModule's 'providers' list.
    </p>
    <p class="highlight">
        Once we've created a injector for the service, it will always return the same instance not matter how many
        times we call <code>this.injector.get(MyService)</code>
    </p>

    <button (click)='invokeService()'>Click here to inject a token</button>
    <p #reffy></p>
  `
})
export class ManuallyInjectComponent implements AfterViewInit {
  @ViewChild('reffy') el: ElementRef;
  injector: Injector;
  myService: TheLovelyService;

  constructor() {
    // Notice that since we’re using our own injector, we didn’t have to add MyService to the NgModule providers list.
    this.injector = Injector.create([{
      provide: TheLovelyService,
      useClass: TheLovelyService,
      deps: []
    }]);
    this.myService = this.injector.get(TheLovelyService);
  }

  ngAfterViewInit() {
    this.addMessage('Same instance each time =' + (this.myService === this.injector.get(TheLovelyService)));
  }

  invokeService(): void {
    this.addMessage(this.myService.getValue());
  }

  addMessage(msg: string) {
    this.el.nativeElement.innerHTML += `${msg}<br>`;
  }
}
