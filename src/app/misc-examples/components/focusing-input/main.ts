import {Component} from '@angular/core';

@Component({
  selector: 'focus-input',
  template: `
      <div class='comps'>
          <collapse-it>
              <h4>These examples are in response to a question posed on stackoverflow</h4>
              <div class="links">
                <dlink [id]="27"></dlink>
                <dlink [id]="24"></dlink>
              </div>
          </collapse-it>
          <collapse-it><solution-four></solution-four></collapse-it>
          <collapse-it><solution-one></solution-one></collapse-it>
          <collapse-it><solution-two></solution-two></collapse-it>
          <collapse-it><solution-three></solution-three></collapse-it>
      </div>
  `
})
export class FocusInput {
  public isVisible: boolean = true;

  appearInput(visible: boolean) {
    this.isVisible = !this.isVisible;
  }

  focusInput(element: any) {
    alert(element);
  }
}
