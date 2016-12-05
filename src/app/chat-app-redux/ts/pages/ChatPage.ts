
import { Component } from '@angular/core';
import ChatNavBar from '../containers/ChatNavBar';
import ChatThreads from '../containers/ChatThreads';
import ChatWindow from '../containers/ChatWindow';

/**
 * ChatPage is the page which shows our chat view. In a larger app we'd
 * have several pages.  
 */
@Component({
  selector: 'chat-page',
  template: `
  <div>
    <chat-nav-bar></chat-nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export default class ChatPage {
}
