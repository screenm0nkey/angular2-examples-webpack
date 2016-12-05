import {Component, OnInit} from '@angular/core';
import {MessagesService, ThreadsService} from '../services/services';
import {Message, Thread} from '../models';
import * as _ from 'underscore';

@Component({
  selector: 'nav-bar',
  template: `
  <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{unreadMessagesCount}}</span>
  </button>
  `
})
export class ChatNavBar implements OnInit {
  unreadMessagesCount: number;

  constructor(private messagesService: MessagesService, private threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.messagesService.messages
      .combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) => [currentThread, messages]
      )
      // one array with two items. the current thread and an array of Message objects
      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages, (sum: number, m: Message) => {
              let messageIsInCurrentThread: boolean = m.thread && currentThread && (currentThread.id === m.thread.id);
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            }, 0);
      });
  }
}

