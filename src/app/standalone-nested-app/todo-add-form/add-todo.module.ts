import { NgModule } from '@angular/core';
import { InsertsSharedModule } from '@standaloneApp/shared/shared.module';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  imports: [InsertsSharedModule],
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent]
})
export class AddTodoModule { }
