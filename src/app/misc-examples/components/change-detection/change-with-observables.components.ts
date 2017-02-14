import {Component, Injectable, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";

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
      <h4>ChangeDetectionStrategy.OnPush with Observables and how to turn off ChangeDetection</h4>
      <p *ngIf="off">
        <strong>Change detection turned off for this component</strong>
        <a href="http://blog.angular-university.io/how-does-angular-2-change-detection-really-work/" target="_blank">Link to article</a>
      </p>
      <p>
        Even though the view is "OnPush" the view will still update as it's using observables
        because the framework will still run change detection on an OnPush component 
        when any of its <strong>input properties changes, when it fires an event, or when an observable fires an event.</strong> 
        This can also be stoppped using this.ref.detach();
      </p>
      <input type="text" #message>
      <button (click)="update(message.value); message.value=''; message.focus()">Add Message</button>
      <button *ngIf="!off" (click)="turnOffChangeDetection()">Turn Off Change Detection</button>
      <button *ngIf="off" (click)="turnOnChangeDetection()">Turn On Change Detection</button>
      <child-obs-list></child-obs-list>
    </div>
  `
})
export class ParentChangeObs {
  private off : boolean = false;
  constructor(private threadsService: ThreadsService, private ref: ChangeDetectorRef) {}

  update(msg: string) {
    this.threadsService.addThread({message: msg});
  }

  turnOffChangeDetection() {
    this.off = true;
    this.ref.detach();
    this.ref.detectChanges(); // we have to call this unless the view won't update to reflect 'this.off'
  }

  turnOnChangeDetection() {
    this.ref.reattach()
    this.off = false;
  }



}
