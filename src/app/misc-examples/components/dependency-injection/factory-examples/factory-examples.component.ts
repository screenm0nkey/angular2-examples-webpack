import { Component, Inject, InjectionToken, OnInit } from "@angular/core";
import { engineProvider, EngineService } from './engine-factory.service';
import { LoggerExampleService, loggerProvider } from './logger-factory.service';
import { jeffProvider, JEFF_TOKEN } from './token-factory.service';







@Component({
  selector: "factory-example",
  providers: [
    engineProvider,
    loggerProvider,
    jeffProvider,
    { provide: JEFF_TOKEN, useValue: "dependency one", multi: true },
    { provide: JEFF_TOKEN, useValue: "dependency two", multi: true },
  ],
  template: `
    <collapse-it>
      <p class="file">
        src/app/misc-examples/components/dependency-injection/factory-examples.component.ts
      </p>
      <h4>Notes on Factories and Creating factories with dependancies</h4>
      The examples used in this component were based on this course <dlink [id]="97"></dlink>
    </collapse-it>
  `
})
export class FactoryExamplesComponent implements OnInit {
  constructor(
    public loggerFactory: LoggerExampleService,
    @Inject("jeffFactory") public jeffFactory: string[],
    @Inject("EngineServiceToken") public engineFactory1: EngineService,
    @Inject("EngineServiceToken") public engineFactory2: EngineService
  ) { }

  ngOnInit() {
    console.log('jeffFactory', this.jeffFactory)
    this.engineFactory1.engineLog();
    this.engineFactory2.engineLog();
    this.loggerFactory.log('Logger factory');
  }


}
