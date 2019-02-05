import {Socket} from 'ngx-socket-io';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface SocketMessage {
  msg: string;
}

@Injectable()
export class ChatService {

  public connected$ : Observable<boolean>;
  public message$ : Observable<string>;
  public messages$ : any;

  constructor(private socket$: Socket) {
    const disconnect$ = this.socket$.fromEvent("disconnect");
    const connect$ = this.socket$.fromEvent("connect");
    this.connected$ = Observable.merge(connect$.mapTo(true), disconnect$.mapTo(false));

    this.message$ = this.socket$
      .fromEvent("msg")
      .map((data: SocketMessage) => data.msg);

    this.messages$ = this.message$.startWith([]).scan((acc:string[], curr:string) => {
      return [...acc, curr];
    });
  }

  sendMessage(msg: string) {
    this.socket$.emit("msg", msg);
  }

  getMessage() {
    return this.socket$
      .fromEvent("msg")
      .map((data: SocketMessage) => data.msg);
  }
}
