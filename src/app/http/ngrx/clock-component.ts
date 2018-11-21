import {Component, Input} from "@angular/core";

/**
 * Clock Component
 */
@Component({
  selector: "clock-component",
  template: `<h3>{{time$ | async | date:'yyyy MMMM EEE d hh:mm:ss'}}</h3>`
})
export class ClockComponent {
  @Input() time$;
}
