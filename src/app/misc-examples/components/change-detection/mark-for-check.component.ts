import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

@Component({
  selector: 'mark-for-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="file">/misc-examples/components/immutable/mark-for-check-component.ts</p>
    <h4>this.ref.markForCheck()</h4>
    
    <p>The tickes below wouldn't update without calling markForCheck()
      as the change detection is set to "ChangeDetectionStrategy.OnPush"
    </p>
    
    <p>
      <strong>setInterval() triggers the change detection</strong> in angular, which updates the view.
      Our view is set to OnPush, so it will only update when it's inputs change but this view
      doesn't have any inputs <strong>so it will never update unless we call markForCheck()</strong>.
    </p>
    
    <button (click)="startStopInterval()">{{start ? 'Stop' : 'Start'}} Interval</button>
    
    Number of ticks: {{numberOfTicks}}
  `
})
export class MarkForCheck {
  start: boolean = false;
  numberOfTicks = 0;
  id: any = 0;

  constructor(private ref: ChangeDetectorRef) {
  }

  startStopInterval() {
    clearInterval(this.id);
    this.start = !this.start;

    if (this.start) {
      this.id = setInterval(() => {
        this.numberOfTicks++;
        // if you don't call markForCheck(), the view wont update as the
        // change detection is set to "ChangeDetectionStrategy.OnPush"
        this.ref.markForCheck();
      }, 1000);
    }
  }
}


