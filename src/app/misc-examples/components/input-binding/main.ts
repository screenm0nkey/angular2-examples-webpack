import {Component, Input} from '@angular/core';
import {InventoryApp} from './inputs';
import {NameParentComponent} from './input-getters-setters';
import {VersionParentComponent} from './ng-onchange';
import {CountdownLocalVarParentComponent} from './local-variables';


@Component({
  directives: [
    InventoryApp,
    NameParentComponent,
    VersionParentComponent,
    CountdownLocalVarParentComponent
  ],
  template: `
    <a href="http://mean.expert/2016/05/21/angular-2-component-communication/" target="_blank">How components Communicate</a>
    <name-parent></name-parent>
    <hr>
    <version-parent></version-parent>
    <hr>
    <countdown-parent-lv></countdown-parent-lv>
    <hr>
    <inventory-app></inventory-app>
  `
})
export class MainInputBindingApp {
}



