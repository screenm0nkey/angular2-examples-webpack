import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "countdown-timer",
  template: "<p>CountdownTimerComponent = {{message}}</p>"
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId: number;
  message: string;
  seconds: number;

  ngOnInit() {
    this.intervalId = 0;
    this.message = "";
    this.seconds = 11;
    this.start();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
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
        this.message = "Blast off!";
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
  selector: "countdown-parent-lv",
  template: `
    <p class="file">
      misc-examples/components/input-binding/local-variables.ts
    </p>
    <h4>Access a child Component's API from the parent component using local variable</h4>
    <p><a routerLink="/misc/view-children">@viewChild @viewChildren</a></p>
    <code><lgt>countdown-timer #timer</lgt></code>

    <div class="example">
      <button (click)="timer.start()">Start</button>
      <button (click)="timer.stop()">Stop</button>

      <div class="seconds">
        CountdownLocalVarParentComponent = {{ timer.seconds }}
      </div>

      <countdown-timer #timer></countdown-timer>
    </div>
  `
})
export class CountdownLocalVarParentComponent {}
