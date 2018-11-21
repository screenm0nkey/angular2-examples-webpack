import {Component} from '@angular/core';
import {MessagesService, ThreadsService, UserService} from './services/services';
import {ChatExampleData} from './ChatExampleData';

@Component({
  selector: 'chat-app',
  template: `
    <p class='path'>src/app/chat-app/ts/app.ts</p>
    <nav-bar></nav-bar>
    <div class='special'>
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  `
})
export class ChatAppComponent {
  constructor(
    private messagesService: MessagesService,
    private threadsService: ThreadsService,
    private userService: UserService
  ) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
