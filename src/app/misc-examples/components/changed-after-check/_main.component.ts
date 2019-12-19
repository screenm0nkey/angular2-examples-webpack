import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <collapse-it>
        <h4>Notes on ExpressionChangedAfterItHasBeenCheckedError</h4>
        <span class="links">
          <dlink [id]="45"></dlink>
          <dlink [id]="84"></dlink>
        </span>
        <ul>
          <li>
            You are executing code in AfterViewInit which often happens when
            working with ViewChild, as it is undefined until AfterViewInit is
            called.
          </li>
          <li>
            You are manipulating the DOM directly (e.g. using jQuery). Angular
            cannot always detect these changes and react properly.
          </li>
          <li>
            It can also happen due to race conditions when you are calling
            functions inside your HTML template.
          </li>
        </ul>
      </collapse-it>

      <collapse-it><shared-service-component></shared-service-component></collapse-it>
      <collapse-it><dynamic-component-example-01></dynamic-component-example-01></collapse-it>
      <collapse-it><event-broadcasting></event-broadcasting></collapse-it>
      
      
      
    </div>
  `
})
export class ChangeAfterComponent {}
