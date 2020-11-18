import { NgModule } from '@angular/core';
import { InsertsSharedModule } from '@standaloneApp/shared/shared.module';
import { AddTodoModule } from '../todo-add-form/add-todo.module';
import { TodoContainerComponent } from './todo-container.component';
import { TodoContainerService } from './todo-container.service';
import { TodoItemLayout1Component } from '@standaloneApp/todo-list-items/todo-item-layout-1';
import { TodoViewsModule } from '@standaloneApp/todo-views/_todo-views.module';
import { TodoItemLayout2Component } from '@standaloneApp/todo-list-items/todo-item-layout-2';

@NgModule({
  imports: [InsertsSharedModule, AddTodoModule, TodoViewsModule],
  declarations: [TodoContainerComponent, TodoItemLayout1Component, TodoItemLayout2Component],
  providers: [TodoContainerService],
  exports: [TodoContainerComponent, TodoItemLayout1Component, TodoItemLayout2Component]
})
export class TodoContainerModule { }