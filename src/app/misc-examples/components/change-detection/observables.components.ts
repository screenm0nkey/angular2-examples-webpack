import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

class Thread {
  constructor(public message?: string) {
  }
}

@Injectable()
class ThreadsService {
  messages: Thread[] = [{message: "First one"}];
  threads: Subject<Thread[]> = new BehaviorSubject<Thread[]>(this.messages);

  addThread(thread: Thread): void {
    this.messages.push(thread);
    this.threads.next(this.messages);
  }
}

@Component({
  selector: "child-obs-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let thread of threads$ | async">{{thread.message}}</li>
    </ul>
  `
})
export class ChildObsList {
  threads$: Subject<Thread[]>;

  constructor(private threadsService: ThreadsService) {
    this.threads$ = this.threadsService.threads;
    this.threads$.subscribe((threads: Thread[]) => console.log(threads));
  }
}

@Component({
  selector: "parent-obs",
  providers: [ThreadsService],
  template: `
    <p class="file">/misc-examples/components/change-detection/observables.components.ts</p>
    <h4>ChangeDetectionStrategy.OnPush with Observables and how to turn off ChangeDetection</h4>
    <a href="http://blog.angular-university.io/how-does-angular-2-change-detection-really-work/" target="_blank">How
      does change detection really work</a>

    <p *ngIf="off">
      <strong>Change detection turned off for this component</strong>
    </p>
    <p>
      Even though the child view <code>ChildObsList</code> is set to "OnPush" it will still update as it's using
      observables.
      <strong>Angular will run the change detection on an "OnPush component"
        when any of its input properties changes, when it fires an event, or when an observable fires an event.
        This can also be stopped using this.ref.detach();</strong>
    </p>
    <p>
      Note: you have to use async pipe for the change detection to be triggered <code>obs|async</code><br>
      Simply having an Obseravble @Input will not work unless you call <code>changeDetector.markForCheck()</code>
      see the example below
    </p>
    <input type="text" #message>
    <button (click)="update(message.value); message.value=''; message.focus()">Add Message</button>
    <button *ngIf="!off" (click)="turnOffChangeDetection()">Turn Off Change Detection</button>
    <button *ngIf="off" (click)="turnOnChangeDetection()">Turn On Change Detection</button>
    <child-obs-list></child-obs-list>
  `
})
export class ParentChangeObs {
  private off: boolean = false;

  constructor(private threadsService: ThreadsService,
              private ref: ChangeDetectorRef) {
  }

  update(msg: string) {
    this.threadsService.addThread({message: msg});
  }

  turnOffChangeDetection() {
    this.off = true;
    this.ref.detach();
    this.ref.detectChanges(); // we have to call this unless the view won't update to reflect 'this.off'
  }

  turnOnChangeDetection() {
    this.ref.reattach();
    this.off = false;
  }
}
