import {Component, OnInit} from "@angular/core";
import {ThreadsService} from "../services/services";
import {Thread} from "../models";

@Component({
  inputs: ["thread"],
  selector: "chat-thread",
  template: `
  <div class="media conversation" (click)="clicked($event)">
    <p class="path">src/app/chat-app/ts/components/ChatThread.ts</p>
    <div class="pull-left">
      <img class="media-object avatar" 
           src="{{thread.avatarSrc}}">
    </div>
    <div class="media-body">
      <p class="media-heading contact-name">{{thread.name}}</p>
      <small class="message-preview">{{thread.lastMessage.text}}</small>
    </div>
  </div>
  `
})
export class ChatThread implements OnInit {
  thread: Thread;
  selected: boolean = false;

  constructor(private threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.threadsService.currentThread.subscribe((currentThread: Thread) => {
      this.selected =
        currentThread && this.thread && currentThread.id === this.thread.id;
    });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
