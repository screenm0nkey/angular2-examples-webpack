import {Component, Injectable, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import * as io from 'socket.io-client';


@Injectable()
export class ChatRoom {
    url$ = Observable.of('https://socket-chat-example-qsaokhakmv.now.sh/');
    private socket$;
    public connected$;
    public message$;
    public messages$;
    public send$ = new Subject();

    constructor(@Inject('io') io) {
        this.socket$ = this.url$
            // convert socket to observable
            .switchMap(url => Observable.of(io(url)));

        this.message$ = this.socket$
            .switchMap(socket => {
                return Observable.fromEvent(socket, 'chat message');
            });

        this.messages$ = this.message$
            .startWith([])
            .scan((acc, curr)=> {
                return [...acc, curr];
            });

        const disconnect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'disconnect'));

        const connect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'connect'));

        this.connected$ = Observable.merge(
            connect$.mapTo(true),
            disconnect$.mapTo(false)
        );

        this.send$.withLatestFrom(this.socket$, (message, socket)=> {
            return {message, socket};
        })
        .subscribe((args)=> {
            let socket: any = args.socket;
            let message : any = args.message;
            socket.emit('chat message', message);
        })
    }
}

@Component({
    selector: 'my-app',
    providers: [ChatRoom, {provide: 'io', useValue: io}],
    styles: [`*{font-family: Monaco, Consolas;}`],
    template: `
        <a href="http://plnkr.co/edit/tqZFewX5ZdUYyxDp9LFO?p=preview" target="_blank">Original plunk</a>
        <h4>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h4>
        <input #i (keyup.enter)="chatRoom.send$.next(i.value); i.value = ''">
        <div *ngFor="let message of chatRoom.messages$ | async">
            {{message}}
        </div>
    `
})
export class SocketApp {
    constructor(private chatRoom:ChatRoom) {}
}