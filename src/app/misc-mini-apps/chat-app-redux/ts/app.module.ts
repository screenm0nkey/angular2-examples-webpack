import {Component, Inject, NgModule} from '@angular/core';
import {compose, createStore, Store, StoreEnhancer} from 'redux';
import {SharedModule} from '../../../shared/_shared.module';
import {AppStore} from './app-store';
import {AppState, default as reducer} from './reducers/index';
import ChatPage from './components/ChatPage';
import ChatThreads from './containers/ChatThreads';
import ChatNavBar from './containers/ChatNavBar';
import ChatWindow from './containers/ChatWindow';
import ChatThread from './components/ChatThread';
import ChatMessage from './components/ChatMessage';
import ChatExampleData from './ChatExampleData';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension']
  ? window['devToolsExtension']()
  : f => f;

let store: Store<AppState> = createStore<AppState>(reducer, compose(devtools));

@Component({
  selector: 'chat-app-redux',
  template: `
    <div class='comps'>
      <chat-page></chat-page>
    </div>
  `
})
export class ReduxChatAppComponent {
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}

@NgModule({
  imports: [SharedModule],
  declarations: [
    ReduxChatAppComponent,
    ChatPage,
    ChatThreads,
    ChatNavBar,
    ChatWindow,
    ChatThread,
    ChatMessage
  ],
  providers: [{provide: AppStore, useFactory: () => store}]
})
export class ReduxChatAppModule {
}
