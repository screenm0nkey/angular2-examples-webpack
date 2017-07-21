import {Component} from "@angular/core";
import {MrTestyServiceOne, MrTestyServiceTwo} from "./services/more-services";

@Component({
  selector: 'misc-app',
  templateUrl: './main.html',
})

export class DepInjectionApp {
  // Multiple versions of the same injectable are possible.
  // because this service is injected via a lazy-loaded module it creates a new instance of the injectable
  // even though it's already been injected in the /app.component.ts
  // see the console.log "Created an instance of MrTestyServiceOne 2"
  // also not that the MrTestyServiceOne provider is declared in the Shared module but
  // it's accessible here as modules use the root injector, which means it's available app wide
  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo) {
  }
}
