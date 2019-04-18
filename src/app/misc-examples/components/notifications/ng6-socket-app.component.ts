import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";


@Component({
  selector: 'ngx-socket-example',
  template: `
    <p class="path">misc-examples/components/notifications/ng6-socket-app.component.ts</p>
    <h4>Single Socket</h4>
    
    <div>
      <h6>{{(chatService.connected$ | async) ? "Connected!" : "Disconnected."}}</h6>
      
      <input type="text" #msgInput name="" value="" (keyup.enter)="sendMsg(msgInput.value); msgInput.value=''">
      <button (click)="sendMsg(msgInput.value)">Send</button>
      <br>
      <h3>Last message {{msg}}</h3>
    </div>

    <div *ngFor="let message of chatService.messages$ | async">
      {{message}}
    </div>
    
  `,
})
export class Ng6SocketAppComponent implements OnInit {
  msg: string;

  constructor(public chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe((msg: string) => this.msg = msg);
  }

  sendMsg(msg) {
    this.chatService.sendMessage(msg);
  }


}
