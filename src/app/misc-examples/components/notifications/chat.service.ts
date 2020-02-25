import { Socket } from "ngx-socket-io";
import { Injectable } from "@angular/core";
import { merge, Observable } from "rxjs";
import { map, mapTo, scan, startWith } from "rxjs/operators";

export interface SocketMessage {
  msg: string;
}

@Injectable({ providedIn: "root" })
export class ChatService {
  public connected$: Observable<boolean>;
  public message$: Observable<string>;
  public messages$: Observable<string[]>;

  constructor(public socket$: Socket) {
    const disconnect$ = this.socket$.fromEvent("disconnect");
    const connect$ = this.socket$.fromEvent("connect");
    this.connected$ = merge(
      connect$.pipe(mapTo(true)),
      disconnect$.pipe(mapTo(false))
    );

    this.message$ = this.socket$
      .fromEvent("msg")
      .pipe(map((data: SocketMessage) => data.msg));

    this.messages$ = this.message$.pipe(startWith([])).pipe(
      scan((acc: string[], curr: string) => {
        return [...acc, curr];
      })
    );
  }

  send(msg: string) {
    this.socket$.emit("msg", msg);
  }
}
