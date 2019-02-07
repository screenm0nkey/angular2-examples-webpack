import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThreadsService} from '../services/services';
import {Observable} from 'rxjs';

@Component({
  selector: 'chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='row'>
      <p class='path'>chat-app/ts/components/ChatThreads.ts</p>
      <div class='conversation-wrap'>
        <chat-thread
             *ngFor='let thread of threads | async' [thread]='thread'>
        </chat-thread>
      </div>
    </div>
  `
})
export class ChatThreads {
  threads: Observable<any>;

  constructor(private threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }
}
