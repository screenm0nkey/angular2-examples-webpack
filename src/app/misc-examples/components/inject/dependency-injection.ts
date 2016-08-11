import {Component} from '@angular/core';
import {InjectComponent} from './injecting-token';

@Component({
  selector: 'misc-app',
  template: require('./main.html'),
  directives: [InjectComponent]
})

export class DepInjectionApp {}
