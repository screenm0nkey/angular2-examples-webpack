import {Component} from '@angular/core';
import {SelectivePreloadingStrategy} from '../../../selective-preloading-strategy';

/**
 * ALl we're doing here is displaying the preloaded modules.
 * Taken from here https://angular.io/guide/router
 */
@Component({
  selector: 'contact',
  template: `
    <h5>Preloaded Modules</h5>
    <ul>
      <li *ngFor='let module of modules'>{{ module }}</li>
    </ul>
  `
})
export class ContactComponent {
  modules: string[];

  constructor(private preloadStrategy: SelectivePreloadingStrategy) {
    this.modules = preloadStrategy.preloadedModules;
  }
}
