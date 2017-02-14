import {Component} from "@angular/core";
import {SelectivePreloadingStrategy} from "../../selective-preloading-strategy";

@Component({
  selector: 'contact',
  template: `
    <h1>Preloaded Modules</h1>
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `
})
export class ContactComponent {
  modules: string[];

  constructor(
    private preloadStrategy: SelectivePreloadingStrategy) {
    this.modules = preloadStrategy.preloadedModules;
  }
}
