import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <div>
          <a href="https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4" target="_blank">
            Everything you need to know about the "ExpressionChangedAfterItHasBeenCheckedError" error
          </a>
      </div>
      <inject-parent-component></inject-parent-component>
      <shared-service-component></shared-service-component>
      <dynamic-component></dynamic-component>
      <event-broadcasting></event-broadcasting>
    </div>
  `
})
export class ChangeAfterComponent {}
