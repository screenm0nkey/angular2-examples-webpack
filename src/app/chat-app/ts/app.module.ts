import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ChatNavBar} from "./components/ChatNavBar";
import {ChatThreads, ChatThread} from "./components/ChatThreads";
import {ChatWindow, ChatMessage} from "./components/ChatWindow";
import {servicesInjectables} from "./services/services";
import {utilInjectables} from "./util/util";
import {ChatApp} from "./app";


@NgModule({
  imports: [SharedModule],
  declarations: [
    ChatApp,
    ChatNavBar,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage,
    utilInjectables
  ],
  providers: [servicesInjectables]
})
export class ChatAppModule {
}
export {ChatApp}



