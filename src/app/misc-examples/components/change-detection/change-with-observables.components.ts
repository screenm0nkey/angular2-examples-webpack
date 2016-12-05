import {
  Component,
  Injectable,
  ChangeDetectionStrategy
} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';


class Thread {
  constructor(public message?: string) {
  }
}

@Injectable()
class ThreadsService {
  messages: Thread[] = [{message: 'First one'}];
  threads: Subject<Thread> = new BehaviorSubject<Thread>(this.messages);

  addThread(thread: Thread): void {
    this.messages.push(thread);
    this.threads.next(this.messages);
  }
}


@Component({
  selector: 'child-obs-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let thread of threads$ | async">{{thread.message}}</li>
    </ul>
  `
})
export class ChildObsList {
  threads$: Subject<Thread>;

  constructor(private threadsService: ThreadsService) {
    this.threads$ = this.threadsService.threads;
    this.threadsService.threads.subscribe((threads: Thread[]) => {
      console.log(threads)
    });
  }
}


@Component({
  selector: 'parent-obs',
  providers: [ThreadsService],
  template: `
    <div>
      <h4>ChangeDetectionStrategy.OnPush with Observables</h4>
      <p>Even though the view is "OnPush" the view will still update as it's using observables</p>
      <input type="text" #message>
      <button (click)="update(message.value);message.value = ''; message.focus()">Add Message</button>
      <child-obs-list></child-obs-list>
    </div>
  `
})
export class ParentChangeObs {
  constructor(private threadsService: ThreadsService) {
  }

  update(msg: string) {
    this.threadsService.addThread({message: msg});
  }
}
