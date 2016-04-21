import {Component } from 'angular2/core';
import {MyComponent} from './problem-one';
import {FixComponent} from './fix-one';

@Component({
    selector: 'rookie-comp',
    template: `
      <my-component></my-component>  
      <my-component2></my-component2>  
	`,
    directives:[MyComponent, FixComponent]
})
export class RookieComponent {

}
