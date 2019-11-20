import {Component} from '@angular/core';

@Component({
  selector: 'keep-count',
  template: `<h5>{{count}}</h5>`
})
export class KeepCountComponent {
  private count: number = 0;

  updateCount(num: number) {
    // if we don't wrap this in a timeout we will get an 'ExpressionChangedAfterItHasBeenCheckedError'
    // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
    setTimeout(() => (this.count = num), 0);
  }
}
