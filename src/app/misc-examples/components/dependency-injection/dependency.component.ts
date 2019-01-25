import {Component} from '@angular/core';
import {MrTestyServiceOne, MrTestyServiceTwo} from './injectables.service';
import {RubbishService} from './injectables.service';

@Component({
  selector: 'misc-app',
  templateUrl: './dependency.html'
})
export class DepInjectionComponent {
  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo, rubbishService: RubbishService) {
  }
}
