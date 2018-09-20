import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../../misc-mini-apps/egghead-example/services/todo-model';

@Pipe({ name: 'searchPipe' })
export class SearchPipe implements PipeTransform {
  transform(value: TodoModel[], term: string): TodoModel[] {
    return value.filter((item: TodoModel) => item.title.startsWith(term));
  }
}
