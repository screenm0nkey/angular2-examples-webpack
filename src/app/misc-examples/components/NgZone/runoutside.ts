import {Component, NgZone} from 'angular2/core';

@Component({
    selector: 'ng-zone-demo',
    template: `
    <h2>Demo: NgZone</h2>
    <a href="http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html">Link</a>

    <pre>
    NgZone comes with an API runOutsideAngular() which performs a 
    given task outside NgZone’s parent zone, which does not emit an "onTurnDone" 
    event, hence no change detection is performed. To demonstrate this useful 
    feature, let’s take look at the following code:
    </pre>

    <p>Progress: {{progress}}%</p>
    <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>

    <button (click)="processWithinAngularZone()">Process within Angular zone</button>
    <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
  `
})
export class NgZoneDemo {
    progress:number = 0;
    label:string;

    constructor(private zone:NgZone) {
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
                    console.log('Outside Done!')
                });
            });
        });
    }

    increaseProgress(doneCallback:Function) {
        this.progress += 1;
        console.log(`Current progress: ${this.progress}%`);

        if (this.progress < 100) {
            window.setTimeout(() => this.increaseProgress(doneCallback), 10);
        } else {
            doneCallback();
        }
    }


}


