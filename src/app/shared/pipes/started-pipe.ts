import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../../misc-mini-apps/egghead-example/services/todo-model';

@Pipe({ name: 'startedPipe' })
export class StartedPipe implements PipeTransform {
  transform(value: TodoModel[], status: string): TodoModel[] {
    return value.filter((item: TodoModel) => item.status === status);
  }
}
