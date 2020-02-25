import {Component} from '@angular/core';
import {MessagesService, ThreadsService, UserService} from './services/services';
import {ChatExampleData} from './chat-data';

@Component({
  selector: 'chat-app',
  template: `
    <p class='path'>chat-app/ts/app.ts</p>
    <div style="background-color:#ccc">
      <nav-bar></nav-bar>
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  `
})
export class ChatAppComponent {
  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public userService: UserService
  ) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
