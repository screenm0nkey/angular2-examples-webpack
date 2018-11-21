import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];
  prevMsg: string = '';
  prevMsgCount: number = 1;
  tid;

  constructor(private zone: NgZone) {
  }

  log(msg: string) {
    if (this.tid) {
      clearTimeout(this.tid);
    }
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.logs[this.logs.length - 1] = msg + ` (${(this.prevMsgCount += 1)}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
    // this needs to be done outside of the angular zone as
    // setTimeout triggers the change detection
    this.zone.runOutsideAngular(() => {
      let self = this;
      this.tid = setTimeout(() => {
        self.logs.push('Idle');
        console.log(self.logs);
        // self.tickReducer();
      }, 100);
    });
  }

  clear() {
    this.logs.length = 0;
  }

  // setTimeout triggers a change detection.
  // schedules a view refresh to ensure display catches up
  tick() {
    setTimeout(_ => 0, 0);
  }
}
