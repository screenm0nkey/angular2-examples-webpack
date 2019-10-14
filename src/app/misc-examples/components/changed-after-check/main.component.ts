import {Component} from '@angular/core';

@Component({
  template: `
    <div class='comps'>
      <div>
        <external-link [id]="45"></external-link>
      </div>
      <shared-service-component></shared-service-component>
      <dynamic-component></dynamic-component>
      <event-broadcasting></event-broadcasting>
    </div>
  `
})
export class ChangeAfterComponent {
}
