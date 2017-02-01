import {Component} from "@angular/core";
import {MessagesService, ThreadsService, UserService} from "./services/services";
import {ChatExampleData} from "./ChatExampleData";

@Component({
  selector: 'chat-app',
  template: `
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export class ChatApp {
  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService,
              private userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}




