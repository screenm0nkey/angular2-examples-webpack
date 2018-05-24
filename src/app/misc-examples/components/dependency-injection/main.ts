import {Component} from "@angular/core";
import {MrTestyServiceOne, MrTestyServiceTwo} from "./services/more-services.service";
import {RubbishService} from "./services/some-service";

@Component({
  selector: "misc-app",
  template: `
    <div class="comps">
      ${require("./dependency.html")}

      ${require("./modules.html")}

      <inject-component></inject-component>

      <inject-parent-component></inject-parent-component>

      <resolve-create-service></resolve-create-service>

      <resolve-create-factory></resolve-create-factory>
    </div>

  `
})
export class DepInjectionApp {
  /**
   Multiple versions of the same injectable are possible.
   Because this service is injected via a lazy-loaded module it creates a new instance of the injectable,
   even though it's already been injected in the /app.component.ts
   See the console.log "Created an instance of MrTestyServiceTwo 2"
   Note :
   1) there is only a single instance of MrTestyServiceOne being created but multiple MrTestyServiceTwo.
      This is due to the way they are declared in the shared.module.ts.
      MrTestyServiceOne is configured using "forRoot"
   2) that the MrTestyServiceOne provider is declared in the Shared module but
      it's accessible here as ngModules use the root injector, which means it's available app wide
   */

  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo, rubbishSerivce:RubbishService) {
  }
}
