import {Component, ElementRef, Inject} from '@angular/core';
import {AppStore} from '../app-store';
import {Store} from 'redux';
import {Thread, User} from '../models/index';
import {ThreadActions} from '../actions/index';
import {AppState, getCurrentThread, getCurrentUser} from '../reducers/index';

/**
 * ChatWindow is the container which handles the current chat
 */
@Component({
  selector: 'chat-window',
  template: `
    <div class='chat-window-container'>
      <div class='chat-window'>
        <div class='panel-container'>
          <div class='panel panel-default'>

            <div class='panel-heading top-bar'>
              <div class='panel-title-container'>
                <h3 class='panel-title'>
                  <span class='glyphicon glyphicon-comment'></span>
                  Chat - {{currentThread.name}}
                </h3>
              </div>
              <div class='panel-buttons-container'  >
                <!-- you could put minimize or close buttons here -->
              </div>
            </div>

            <div class='panel-body msg-container-base'>
              <chat-message
                   *ngFor='let message of currentThread.messages'
                   [message]='message'>
              </chat-message>
            </div>

            <div class='panel-footer'>
              <div class='input-group'>
                <input type='text'
                       class='chat-input'
                       placeholder='Write your message here...'
                       (keydown.enter)='onEnter($event)'
                       [(ngModel)]='draftMessage.text' />
                <span class='input-group-btn'>
                  <button class='btn-chat'
                     (click)='onEnter($event)'
                     >Send</button>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `
})
export default class ChatWindow {
  currentThread: Thread;
  draftMessage: { text: string };
  currentUser: User;

  constructor(
    @Inject(AppStore) public store: Store<AppState>,
    public el: ElementRef
  ) {
    store.subscribe(this.updateState.bind(this));
    this.updateState();
    this.draftMessage = {text: ''};
  }

  updateState() {
    let state = this.store.getState();
    this.currentThread = getCurrentThread(state);
    this.currentUser = getCurrentUser(state);
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    let scrollPane: any = this.el.nativeElement.querySelector(
      '.msg-container-base'
    );
    if (scrollPane) {
      setTimeout(() => (scrollPane.scrollTop = scrollPane.scrollHeight));
    }
  }

  sendMessage(): void {
    this.store.dispatch(
      ThreadActions.addMessage(this.currentThread, {
        author: this.currentUser,
        isRead: true,
        text: this.draftMessage.text
      })
    );
    this.draftMessage = {text: ''};
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }
}
