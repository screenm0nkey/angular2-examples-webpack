import { Component, OnInit } from '@angular/core';
import { MessagesService, ThreadsService } from '../services/services';
import { Message, Thread } from '../models';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'nav-bar',
  template: `
    <div style="background-color:grey">
      <p class='path'>ChatNavBar.ts</p>
      <p><strong>Unread Messages</strong> = <span class='badge'>{{unreadMessagesCount}}</span></p>
    </div>

  `
})
export class ChatNavBar implements OnInit {
  unreadMessagesCount: number;

  constructor(
    private messagesService: MessagesService,
    private threadsService: ThreadsService
  ) {
  }

  ngOnInit(): void {
    const wrapThreadInArray$ = combineLatest(
      this.messagesService.messages$,
      this.threadsService.currentThread$,
      (messages: Message[], currentThread: Thread) => [currentThread, messages]
    );

    // one array with two items. the current thread and an array of Message objects
    wrapThreadInArray$.subscribe(([currentThread, messages]: [Thread, Message[]]) => {
      this.unreadMessagesCount = _.reduce(messages, (acc: number, m: Message)=> this.getMessageCount(currentThread, acc, m), 0);
    });
  }

  getMessageCount(currentThread:Thread, acc: number, m: Message) {
    let messageIsInCurrentThread: boolean = m.thread && currentThread && currentThread.id === m.thread.id;
    if (m && !m.isRead && !messageIsInCurrentThread) {
      acc = acc + 1;
    }
    return acc;
  }
}
