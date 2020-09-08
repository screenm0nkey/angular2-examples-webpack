import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/services';
import { Message, User } from '../models';

@Component({
  inputs: ['message'],
  selector: 'chat-message',
  template: `
  <div style="border:solid gold" class='msg-container' [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">
     <p class="path">ChatMessage.ts</p>
    <div class='avatar' *ngIf='!incoming'>
      <img src='{{message.author.avatarSrc}}'>
    </div>

    <div class='messages' [ngClass]="{'msg-sent': !incoming, 'msg-receive': incoming}">
      <p>{{message.text}}</p>
      <p class='time'>{{message.sender}} • {{message.sentAt | fromNow}}</p>
    </div>

    <div class='avatar' *ngIf='incoming'>
      <img src='{{message.author.avatarSrc}}'>
    </div>
  </div>
  `
})
export class ChatMessage implements OnInit {
  message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user: User) => {
      this.currentUser = user;
      if (this.message.author && user) {
        this.incoming = this.message.author.id !== user.id;
      }
    });
  }
}
