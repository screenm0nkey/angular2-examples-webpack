import {Component } from '@angular/core';
import {MyComponent} from './problem-one';
import {FixComponent} from './problem-one-fix';

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
