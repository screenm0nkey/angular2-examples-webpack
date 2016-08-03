import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'cmp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<h3>this.ref.markForCheck() example</h3>
<pre>
The tickes below wouldn't update without calling markForCheck()
as the change detection is set to "ChangeDetectionStrategy.OnPush"
</pre>

<p>
    <strong>setInterval() triggers the change detection</strong> in angular, which updates the views
    but our view is set to OnPush so it will only update when it's inputs change.
    it doesn't have any inputs so it will never update unless we call markForCheck().
</p>

Number of ticks: {{numberOfTicks}}
    `
})
class Cmp {
  numberOfTicks = 0;

  constructor(private ref:ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // if you don't call markForCheck(), the view wont update as the
      // change detection is set to "ChangeDetectionStrategy.OnPush"
      this.ref.markForCheck();
    }, 1000);
  }
}

@Component({
  selector: 'mark-for-check',
  template: `<cmp><cmp>`,
  directives: [Cmp]
})
export class MarkForCheck {
}


