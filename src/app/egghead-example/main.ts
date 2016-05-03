import {Component} from "@angular/core";
import {SearchBox} from "./search/components/search-box";
import {TodoInput} from "./todo/components/todo-input";
import {TodoList} from "./todo/components/todo-list";
import {StatusSelector} from "./todo/components/status-selector";
import {TodoService} from "./todo/services/todo-service";

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
        }
    `]
})
export class EggheadApp{}

