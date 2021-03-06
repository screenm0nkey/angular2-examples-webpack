import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from "@angular/core";

@Component({
  selector: "detect-changes",
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p class="path">
      /misc-examples/components/immutable/detect-changes.component.ts
    </p>
    <h4>Speed-up an app by stopping the component from being checked using this.ref.detectChanges()</h4>
    <dlink [id]="35"></dlink>

    <dlink [id]="51"></dlink>
    <dlink [id]="52"></dlink>
    <a routerLink="../speedyapp">Speeding up app</a>

    <p>
      On push will stop the component's view bindings from being checked. It
      doesn’t prevent Angular from checking the components themselves, to see if
      the inputs have changed. But turning off the components change detection
      stops the component and view from being checked.
    </p>

    <p class="highlight">
      ngDoCheck will get called even if the changeDetector is detached
    </p>

    <p>
      the change detector detachment needs to be in
      <code>ngAfterInit()</code> unless none of the interpolated text will
      display in the view when it loads.
    </p>

    <p>
      Try clicking the 'Manually detect button' and the buttons will update.
      Then reattach the ref and start the interval. You can then see what
      happening.
    </p>

    <p class="highlight">
      We only want to detach the change detectors after change detection has
      been performed for the first time, otherwise we won’t see any text in the
      buttons. To call <code>detach()</code> we can take advantage of Angular’s
      AfterViewInit life cycle hook.
    </p>

    <button (click)="startStopInterval()">
      {{ start ? "Stop" : "Start" }} Interval
    </button>
    Number of ticks: {{ numberOfTicks }}

    <button (click)="detachRef()">
      {{ attached ? "Detach" : "Reattach" }} ChangeDetector
    </button>

    <button (click)="detectChanges()">Manually detect changes</button>
  `
})
export class DetectChanges implements AfterViewInit {
  start: boolean = false;
  numberOfTicks = 0;
  id: any = 0;
  attached: boolean;

  constructor(public ref: ChangeDetectorRef) { }

  /**
   * We only want to detach the change detectors after change detection has been performed for the first time,
   * otherwise we won’t see any text in the buttons.
   * To call detach() we can take advantage of Angular’s AfterViewInit life cycle hook.
   * https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
   */
  ngAfterViewInit() {
    this.ref.detach();
  }

  ngDoCheck() {
    console.log("%cngDoCheck detect-changes", "color:orange");
  }

  detectChanges() {
    if (!this.attached) {
      this.ref.reattach();
      this.ref.detectChanges();
      this.ref.detach();
    } else {
      this.ref.detectChanges();
    }
  }

  detachRef() {
    this.attached = !this.attached;
    if (this.attached) {
      this.ref.detach();
    } else {
      this.ref.reattach();
    }
  }

  startStopInterval() {
    clearInterval(this.id);
    this.start = !this.start;
    if (this.start) {
      this.id = setInterval(() => {
        this.numberOfTicks++;
      }, 1000);
    }
  }
}
