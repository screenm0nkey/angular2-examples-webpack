import {Component} from "@angular/core";
import {TodoService} from "./services/todo-service";

@Component({
    selector: 'eggehead-app',
    providers : [TodoService], // this provides the service to all of it's children components
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

