import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

class Thread {
  constructor(public message?: string) {
  }
}

@Injectable({ providedIn: 'root' })
class ThreadsService {
  messages: Thread[] = [{ message: 'First one' }];
  threads: Subject<Thread[]> = new BehaviorSubject<Thread[]>(this.messages);

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
      <li *ngFor='let thread of threads$ | async'>{{thread.message}}</li>
    </ul>
  `
})
export class ChildObsList {
  threads$: Subject<Thread[]>;

  constructor(public threadsService: ThreadsService) {
    this.threads$ = this.threadsService.threads;
    this.threads$.subscribe((threads: Thread[]) => console.log(threads));
  }
}

@Component({
  selector: 'parent-obs',
  providers: [ThreadsService],
  template: `
      <p class="path">/misc-examples/components/change-detection/observables.components.ts</p>
      <h4><code>ChangeDetectionStrategy.OnPush</code> with Observables and how to turn off ChangeDetection</h4>
      <dlink [id]="22"></dlink>

      <p>
        Even though the child view <code>ChildObsList</code> is set to 'OnPush' it will still update as it's using
        observables.
        <highlight>Angular will run the change detection on an 'OnPush component'
          when any of its input properties changes, when it fires an event, or when an observable fires an event.
          This can also be stopped using this.ref.detach();</highlight>
      </p>
      <p>
        Note: you have to use async pipe for the change detection to be triggered <code>obs|async</code><br>
        Simply having an Obseravble @Input will not work unless you call <code>changeDetector.markForCheck()</code>
        see the example below
      </p>
      <p *ngIf='off' class="warning">
        Change detection turned off for this component
      </p>
      <input type='text' #message>
      <button (click)="update(message.value); message.value='';">Add Message</button>
      <button *ngIf='!off' (click)='turnOffChangeDetection()'>Turn Off Change Detection</button>
      <button *ngIf='off' (click)='turnOnChangeDetection()'>Turn On Change Detection</button>
      <child-obs-list></child-obs-list>
  `
})
export class ParentChangeObs {
  public off: boolean = false;

  constructor(public threadsService: ThreadsService,
    public ref: ChangeDetectorRef) {
  }

  update(msg: string) {
    this.threadsService.addThread({ message: msg });
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
