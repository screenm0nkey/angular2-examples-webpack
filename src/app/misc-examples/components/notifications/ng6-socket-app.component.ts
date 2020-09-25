import { Component, OnInit } from "@angular/core";
import { ChatService } from "./chat.service";

@Component({
  selector: "ngx-socket-example",
  template: `
    <p class="path">
      misc-examples/components/notifications/ng6-socket-app.component.ts
    </p>
    <h4>Single Socket Example using NGX-Socket-IO</h4>

    <p class="red">Start WWW</p>
    <code>const config: SocketIoConfig = <cur> url: 'http://localhost:1970', options:... </cur>;</code><br>
    <code>SocketIoModule.forRoot(config)</code>

    <div>
      <p>
        {{ (chatService.connected$ | async) ? "Connected!" : "Disconnected." }}
      </p>

      <input
        type="text"
        #msgInput
        name=""
        value=""
        (keyup.enter)="sendMsg(msgInput.value); msgInput.value = ''"
      />
      <button (click)="sendMsg(msgInput.value); msgInput.value = ''">
        Send
      </button>
      <hr />
      <p>Last message <strong>{{msg}}</strong></p>
    </div>

    <div *ngFor="let message of chatService.messages$ | async">
      {{ message }}
    </div>
  `
})
export class Ng6SocketAppComponent implements OnInit {
  msg: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.message$.subscribe((msg: string) => (this.msg = msg));
  }

  sendMsg(msg) {
    this.chatService.send(msg);
  }
}
