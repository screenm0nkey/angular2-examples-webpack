import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {ChatNavBar} from "./components/ChatNavBar";
import {ChatThreads} from "./components/ChatThreads";
import {ChatThread} from "./components/ChatThread";
import {ChatWindow} from "./components/ChatWindow";
import {ChatMessage} from "./components/ChatMessage";
import {servicesInjectables} from "./services/services";
import {ChatAppComponent} from "./app";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ChatAppComponent,
    ChatNavBar,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage
  ],
  providers: [servicesInjectables]
})
export class ChatAppRxJsModule {
}

export {ChatAppComponent};
