import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}


@Component({
  selector: 'countdown-parent-lv',
  template: `
<p class="file">src/app/misc-examples/components/input-binding/local-variables.ts</p>
  <h4>Access a child component from the parent using local variable</h4>
  <p><a routerLink="/misc/view-children">@viewChild @viewChildren</a></p>
  <code>&lt;countdown-timer #timer&gt;</code>
  
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  
  <countdown-timer #timer></countdown-timer>
  `,
})
export class CountdownLocalVarParentComponent {
}
