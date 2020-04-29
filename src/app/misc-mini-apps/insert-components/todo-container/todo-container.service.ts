import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '@insertApp/shared/models/todo-item';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoContainerService {
    private _todoList: TodoItem[] = [];

    public get todoList(): TodoItem[] {
        return this._todoList;
    }

    private todoListUrl = '//localhost:1970/todo-list';

    constructor(httpClient: HttpClient) {
        httpClient.get<Array<TodoItem>>(this.todoListUrl).subscribe(data => {
            this._todoList = data;
        });
    }

    public addTodo(todo: TodoItem) {
        return of(null).pipe(delay(2000));
    }

    public updateTodo(todo: TodoItem) {
        return of(null).pipe(delay(2000));
    }

    public deleteTodo(id: string) {
        return of(null).pipe(delay(2000));
    }
}
