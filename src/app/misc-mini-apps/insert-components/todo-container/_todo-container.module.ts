import { NgModule } from '@angular/core';
import { InsertsSharedModule } from '@insertApp/shared/shared.module';
import { AddTodoModule } from '../todo-add-form/add-todo.module';
import { TodoContainerComponent } from './todo-container.component';
import { TodoContainerService } from './todo-container.service';
import { TodoItemLayout1Component } from './todo-item-layout-1';
import { TodoItemLayout2Component } from './todo-item-layout-2';
import { TodoViewsModule } from '@insertApp/todo-views/_todo-views.module';

@NgModule({
  imports: [ InsertsSharedModule, AddTodoModule, TodoViewsModule],
  declarations: [TodoContainerComponent, TodoItemLayout1Component, TodoItemLayout2Component],
  providers: [TodoContainerService],
  exports: [TodoContainerComponent, TodoItemLayout1Component, TodoItemLayout2Component]
})
export class TodoContainerModule { }
//