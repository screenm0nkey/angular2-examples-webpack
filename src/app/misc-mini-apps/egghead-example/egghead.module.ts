import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/_shared.module';
import {EggheadAppComponent} from './main.component';
import {SearchBox} from './components/search-box.component';
import {TodoInput} from './components/new-todo.component';
import {TodoList} from './components/todo-list.component';
import {StatusSelector} from './components/status-selector.component';
import {TodoItem} from './components/todo-list-item.component';
import {SearchPipe} from "./pipes/search-pipe";
import {StartedPipe} from "./pipes/started-pipe";

@NgModule({
  imports: [SharedModule],
  declarations: [
    EggheadAppComponent,
    TodoInput,
    TodoList,
    StatusSelector,
    SearchBox,
    TodoItem,
    SearchPipe,
    StartedPipe
  ]
})
export class EggheadMiniAppModule {
}

export {EggheadAppComponent};
