import {
  Component,
  Inject,
  InjectionToken,
  OnInit,
  Injectable
} from "@angular/core";

/**
 * Engine Factory
 */
@Injectable({ providedIn: "root" })
class EngineService {
  static counter: number = 0;
  engineLog(s?: String) {
    console.log(`%cEngineService factory instance-id=${++EngineService.counter}`,"color:orange",s);
  }
}
const engineFactory = (): EngineService => {
  return new EngineService();
}

/**
 * Jeff Factory
 */
const jeffFactory = (someTokens: string[]): string[] => {
  return someTokens.map(str => str.toUpperCase());
}
const JEFF_TOKEN = new InjectionToken<string>("ThisCanBeCalledAnythingJeffToken");

/**
 * Logging Factory
 */
@Injectable({ providedIn: "root" })
class ConsoleWriter {
  public write(msg: string) {
    console.log(`ConsoleWriter, ${msg}`);
  }
}
@Injectable({ providedIn: "root" })
class LoggerService {
  constructor(private isEnabled: boolean, private writer: ConsoleWriter) {}

  log(msg: string) {
    if (this.isEnabled) {
      this.writer.write(msg);
    }
  }
}
const loggerFactory = (writer: ConsoleWriter): LoggerService => {
  return new LoggerService(true, writer);
};


// https://egghead.io/lessons/angular-pass-dependencies-to-a-factory-provider-in-angular
@Component({
  selector: "factory-example",
  providers: [
    {
      provide: 'EngineServiceToken',
      useFactory: engineFactory
    },
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [ConsoleWriter]
    },
    {
      provide: "jeffFactory",
      useFactory: jeffFactory,
      deps: [JEFF_TOKEN]
    },
    { provide: JEFF_TOKEN, useValue: "dependency one", multi: true },
    { provide: JEFF_TOKEN, useValue: "dependency two", multi: true },
  ],
  template: `
    <collapse-it>
      <p class="file">
        src/app/misc-examples/components/dependency-injection/factory-examples.component.ts
      </p>
      <h4>Notes on Factories and Creating factories with dependancies</h4>
    </collapse-it>
  `
})
export class FactoryExamplesComponent implements OnInit {
  constructor(
    public loggerFactory: LoggerService,
    @Inject("jeffFactory") public jeffFactory: string[],
    @Inject("EngineServiceToken") public engineFactory1: EngineService, 
    @Inject("EngineServiceToken") public engineFactory2: EngineService
  ) {}

  ngOnInit() {
    console.log('jeffFactory', this.jeffFactory)
    this.engineFactory1.engineLog();
    this.engineFactory2.engineLog();
    this.loggerFactory.log('Logger factory');
  }

  
}
