import { Pipe, PipeTransform } from "@angular/core";
import { TodoModel } from "../services/todo-model";

@Pipe({ name: "search" })
export class SearchPipe implements PipeTransform {
  transform(value: TodoModel[], term: string): TodoModel[] {
    return value.filter((item: TodoModel) => item.title.startsWith(term));
  }
}
