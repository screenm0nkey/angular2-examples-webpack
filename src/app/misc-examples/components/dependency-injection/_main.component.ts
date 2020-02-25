import {Component, OnInit} from '@angular/core';
import {MrTestyServiceOne, MrTestyServiceTwo, RubbishService} from './injectables.service';

@Component({
  selector: 'misc-app',
  templateUrl: './dependency.html'
})
export class DepInjectionComponent implements OnInit {

  constructor(public ts1: MrTestyServiceOne, public ts2: MrTestyServiceTwo, rubbishService: RubbishService) {
  }

  ngOnInit(): void {
  }
}
