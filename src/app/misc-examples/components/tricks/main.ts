import {Component} from '@angular/core';
import {ScrollComponent} from './scroll-bottom';
import {NextComponent} from './next-input';
import {Typewriter} from './typewriter';

@Component({
    selector: 'tracks-main-component',
    template: `
      <scroll-bottom></scroll-bottom>
      <hr>
      <next-input></next-input>
      <hr>
      <typewriter></typewriter>
	`,
    directives: [ScrollComponent, NextComponent, Typewriter]
})
export class TricksMainComponent {

}
