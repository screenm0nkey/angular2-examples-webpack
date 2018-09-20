import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EggheadAppComponent } from './main';
import { SearchBox } from './components/search-box';
import { TodoInput } from './components/new-todo-input';
import { TodoList } from './components/todo-list';
import { StatusSelector } from './components/status-selector';
import { TodoItem } from './components/todo-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    EggheadAppComponent,
    TodoInput,
    TodoList,
    StatusSelector,
    SearchBox,
    TodoItem
  ]
})
export class EggheadExamplesModule {}

export { EggheadAppComponent };
