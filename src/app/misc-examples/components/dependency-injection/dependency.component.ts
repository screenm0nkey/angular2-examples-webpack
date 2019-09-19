import {Component, OnInit} from '@angular/core';
import {MrTestyServiceOne, MrTestyServiceTwo, RubbishService} from './injectables.service';

@Component({
  selector: 'misc-app',
  templateUrl: './dependency.html'
})
export class DepInjectionComponent implements OnInit {

  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo, rubbishService: RubbishService) {
  }

  ngOnInit(): void {
  }
}
