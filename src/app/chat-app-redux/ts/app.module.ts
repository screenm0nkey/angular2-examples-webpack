import {Inject, Component, NgModule} from "@angular/core";
import {createStore, Store, compose, StoreEnhancer} from "redux";
import {SharedModule} from "../../shared/shared.module";
import {AppStore} from "./app-store";
import {AppState, default as reducer} from "./reducers";
import ChatPage from "./pages/ChatPage";
import ChatThreads from "./containers/ChatThreads";
import ChatNavBar from "./containers/ChatNavBar";
import ChatWindow from "./containers/ChatWindow";
import ChatThread from "./components/ChatThread";
import ChatMessage from "./components/ChatMessage";
import {FromNowPipe} from "./pipes/FromNowPipe";
import ChatExampleData from "./ChatExampleData";

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

@Component({
  selector: 'chat-app-redux',
  template: `
  <div>
    <chat-page></chat-page>
  </div>
  `
})
export class ChatAppRedux {
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}

@NgModule({
  imports: [SharedModule],
  declarations: [
    ChatAppRedux,
    ChatPage,
    ChatThreads,
    ChatNavBar,
    ChatWindow,
    ChatThread,
    ChatMessage,
    FromNowPipe
  ],
  providers: [
    {provide: AppStore, useFactory: () => store}
  ]
})
export class ChatAppReduxModule {
}



