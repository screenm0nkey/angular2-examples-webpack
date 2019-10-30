import {Component} from '@angular/core';

@Component({
  template: `
    <div class='comps'>
      <div>
        <dlink [id]="45"></dlink>
      </div>
      <shared-service-component></shared-service-component>
      <dynamic-component></dynamic-component>
      <event-broadcasting></event-broadcasting>
    </div>
  `
})
export class ChangeAfterComponent {
}
