import {Component, Inject} from "@angular/core";
import {AppStore} from "../app-store";
import {Store} from "redux";
import {AppState, getUnreadMessagesCount} from "../reducers";

@Component({
  selector: 'chat-nav-bar',
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      </div>
      <p class="navbar-text navbar-right">
        <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{ unreadMessagesCount }}</span>
        </button>
      </p>
    </div>
  </nav>
  `
})
export default class ChatNavBar {
  unreadMessagesCount: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(this.updateState.bind(this));
    this.updateState();
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }
}
