import {Component} from "@angular/core";
import {SearchBox} from "./components/search-box";
import {TodoInput} from "./components/new-todo-input";
import {TodoList} from "./components/todo-list";
import {StatusSelector} from "./components/status-selector";
import {TodoService} from "./services/todo-service";

@Component({
    selector: 'eggehead-app',
    providers : [TodoService], // this provides the service to all of it's children components
    directives: [TodoInput, TodoList, StatusSelector, SearchBox],
    template: require('./main.html'),
    styles : [`
        .egghead {    
            background: lightpink;
            padding: 20px;
            border-radius: 5px;
            border: solid 3px darkgrey;
            display : table;
        }
    `]
})
export class EggheadApp{}

