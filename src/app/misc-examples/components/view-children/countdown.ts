import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

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

  public countDown() {
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
  selector: 'countdown-parent-vc',
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/view-children/view-child.ts</p>
          <h4>Accessing a component's API using @ViewChild - Countdown example</h4>
          <code>@ViewChild(CountdownTimerComponent,<cur>static: false</cur>) public timerComponent: CountdownTimerComponent;</code>

          <button (click)='start()'>Start</button>
          <button (click)='stop()'>Stop</button>

          <div class='seconds'>{{ seconds() }}</div>
          <countdown-timer></countdown-timer>
      </collapse-it>
  `
})
export class CountdownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent) public timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tickReducer first to avoid one-time devMode unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
