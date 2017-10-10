import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {EggheadApp} from "./main";
import {SearchBox} from "./components/search-box";
import {TodoInput} from "./components/new-todo-input";
import {TodoList} from "./components/todo-list";
import {StatusSelector} from "./components/status-selector";
import {TodoItemRenderer} from "./components/todo-item-renderer";
import {StartedPipe} from "./pipes/started-pipe";
import {SearchPipe} from "./pipes/search-pipe";

@NgModule({
  imports: [SharedModule],
  declarations: [
    EggheadApp,
    TodoInput,
    TodoList,
    StatusSelector,
    SearchBox,
    TodoItemRenderer,
    StartedPipe,
    SearchPipe
  ]
})
export class EggheadExamplesModule {
}

export {EggheadApp}



