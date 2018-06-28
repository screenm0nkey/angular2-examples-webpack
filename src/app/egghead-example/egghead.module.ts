import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { EggheadApp } from "./main";
import { SearchBox } from "./components/search-box";
import { TodoInput } from "./components/new-todo-input";
import { TodoList } from "./components/todo-list";
import { StatusSelector } from "./components/status-selector";
import { TodoItem } from "./components/todo-item.component";
import { SearchPipe,CapitalizePipe,StartedPipe } from "./pipes";

@NgModule({
  imports: [SharedModule],
  declarations: [
    EggheadApp,
    TodoInput,
    TodoList,
    StatusSelector,
    SearchBox,
    TodoItem,
    StartedPipe,
    SearchPipe,
    CapitalizePipe
  ]
})
export class EggheadExamplesModule {}

export { EggheadApp };
