import {Component, Inject} from '@angular/core';
import {AppStore} from '../app-store';
import {Store} from 'redux';
import {Thread} from '../models/index';
import {ThreadActions} from '../actions/index';
import {AppState, getAllThreads, getCurrentThread} from '../reducers/index';

@Component({
  selector: 'chat-threads',
  template: `
  <!-- conversations -->
  <div class='row'>
    <div class='conversation-wrap'>
      <chat-thread
           *ngFor='let thread of threads'
           [thread]='thread'
           [selected]='thread.id === currentThreadId'
           (onThreadSelected)='handleThreadClicked($event)'>
      </chat-thread>
    </div>
  </div>
  `
})
export default class ChatThreads {
  threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) public store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    let state = this.store.getState();

    // Store the threads list
    this.threads = getAllThreads(state);

    // We want to mark the current thread as selected,
    // so we store the currentThreadId as a value
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }
}
