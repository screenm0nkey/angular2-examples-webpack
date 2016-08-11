import {Component} from '@angular/core';
import {ViewChildrenComponent} from './children-child';
import {CountdownViewChildParentComponent} from './view-child';


@Component({
  directives: [
    ViewChildrenComponent,
    CountdownViewChildParentComponent
  ],
  template: `
    <my-component2></my-component2>
    <hr>
    <countdown-parent-vc></countdown-parent-vc>
  `
})
export class MainChildrenApp {
}



