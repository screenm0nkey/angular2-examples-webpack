import {Component, Input} from '@angular/core';

@Component({
  selector: 'clock',
  template: `<h3>{{time | date:'yyyy MMMM EEE d hh:mm:ss'}}</h3>`
})
export class Clock {
  @Input() time;
}
