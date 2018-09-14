import {Injectable} from "@angular/core";
import {Message, Thread, User} from "../models";

import {Observable, Subject} from "rxjs";
import {map, publishReplay, refCount, scan, filter} from 'rxjs/operators';


let initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
  // a stream that publishes new messages$ only once
  newMessages$: Subject<Message> = new Subject<Message>();

  // `messages$` is a stream that emits an array of the most up to date messages$
  messages$: Observable<Message[]>;

  // `updates$` receives _operations_ to be applied to our `messages$`
  // it's a way we can perform changes on *all* messages$ (that are currently
  // stored in `messages$`)
  updates$: Subject<any> = new Subject<any>();

  // action streams
  create$: Subject<Message> = new Subject<Message>();
  markThreadAsRead$: Subject<any> = new Subject<any>();

  constructor() {
    this.messages$ = this.updates$
    // watch the updates$ and accumulate operations on the messages$
      .pipe(scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, initialMessages))
      .pipe(publishReplay(1))
      .pipe(refCount());

    this.create$
      .pipe(map(function (message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      }))
      .subscribe(this.updates$);

    this.newMessages$.subscribe(this.create$);

    this.markThreadAsRead$
      .pipe(map((thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map((message: Message) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      }))
      .subscribe(this.updates$);
  }

  // an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages$.pipe(filter((message: Message) => {
      // belongs to this thread and isn't authored by this user
      return message.thread.id === thread.id && message.author.id !== user.id;
    }));
  }
}

export const messagesService: Array<any> = [MessagesService];
