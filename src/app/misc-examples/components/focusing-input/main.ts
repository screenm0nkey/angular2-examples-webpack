import {Component} from '@angular/core';

@Component({
  selector: 'focus-input',
  template: `
      <div class='comps'>
          <div>
              <p>These examples are in response to a question posed on stackoverflow</p>
              <dlink [id]="27"></dlink>

              <p>found on Rookie Mistakes</p>
              <dlink [id]="24"></dlink>
          </div>
          <solution-four></solution-four>
          <solution-one></solution-one>
          <solution-two></solution-two>
          <solution-three></solution-three>
      </div>
  `
})
export class FocusInput {
  private isVisible: boolean = true;

  appearInput(visible: boolean) {
    this.isVisible = !this.isVisible;
  }

  focusInput(element: any) {
    alert(element);
  }
}
