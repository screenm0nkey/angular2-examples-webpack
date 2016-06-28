import {Component} from '@angular/core';
import {ScrollComponent} from './scroll-bottom';
import {NextComponent} from './next-input';

@Component({
    selector: 'tracks-main-component',
    template: `
      <scroll-bottom></scroll-bottom>
      <hr>
      <next-input></next-input>
	`,
    directives: [ScrollComponent, NextComponent]
})
export class TricksMainComponent {

}
