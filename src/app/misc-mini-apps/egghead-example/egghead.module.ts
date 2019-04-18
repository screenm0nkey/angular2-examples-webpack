import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {EggheadAppComponent} from './main';
import {SearchBox} from './components/search-box';
import {TodoInput} from './components/new-todo-input';
import {TodoList} from './components/todo-list';
import {StatusSelector} from './components/status-selector';
import {TodoItem} from './components/todo-item.component';
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
