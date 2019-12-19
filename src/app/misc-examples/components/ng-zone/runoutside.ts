import {Component, DoCheck, NgZone} from '@angular/core';

@Component({
  selector: 'ng-zone-demo',
  template: `
    <p class='path'>misc-examples/components/ng-zone/runoutside.ts</p>
    <h4>Demo: NgZone (watch console log)</h4>
    <dlink [id]="18"></dlink>

    <p>NgZone comes with an API runOutsideAngular() <highlight>which performs a
      given task outside NgZone’s parent zone. This means it does not emit an 'onTurnDone'
      event, hence no change detection is performed.</highlight> This means it will be faster.</p>

    <p>ngDoCheck() is called every time the component is checked.
      a component is checked every time change detection occurs, which is triggered
      every time an angular event happens i.e click, settimeout, http etc.</p>

    <p>Running processes outside of the Angular zone stops ngDoCheck() being called.</p>

    <p>Progress: {{progress}}%</p>
    <p *ngIf='progress >= 100'>Done processing {{label}} of Angular zone!</p>

    <button (click)='processWithinAngularZone()'>Process within Angular zone</button>
    <button (click)='processOutsideOfAngularZone()'>Process outside of Angular zone</button>
  `
})
export class NgZoneDemo implements DoCheck {
  progress: number = 0;
  label: string;

  constructor(private zone: NgZone) {
  }

  // this is called every time the component is checked.
  // a component is checked every time change detection occurs
  // which is triggered every time an event an angular event happens.
  ngDoCheck() {
    console.log(`ngDoCheck ${this.progress}%`);
  }

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this.increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        // reenter the Angular zone and display done
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

  increaseProgress(doneCallback: Function) {
    this.progress += 1;
    if (this.progress < 100) {
      window.setTimeout(() => this.increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
