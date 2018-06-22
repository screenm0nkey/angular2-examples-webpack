import {Component} from "@angular/core";

@Component({
  template: `
        <div class="comps">
          <ngrx-clock-one></ngrx-clock-one>
          
          <ngrx-time-machine></ngrx-time-machine>
          
          <ngrx-queue-component></ngrx-queue-component>
          
          <ngrx-in-ten></ngrx-in-ten>
        </div>
    `
})
export class NgrxMainComponent {
}
