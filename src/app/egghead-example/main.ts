import { Component } from "@angular/core";
import { TodoService } from "./services/todo-service";

@Component({
  selector: "eggehead-app",
  providers: [TodoService], // this provides the service to all of it's children components
  template: `
      <div class="egghead">
        <h4>Egghead example from john Liquist</h4>

<pre>Take a look at the Todo service and see how the it keeps the data immutable
Also see how the pipes work by creating a new data array rather than mutating the array</pre>

            <p><a target="_blank" href="https://egghead.io/series/angular-2-fundamentals">Fundamentals videos</a> </p>
        
            <search-box (update)="term = $event"></search-box>
            <new-todo></new-todo>
            <status-selector (select)="status = $event"></status-selector>
            <todo-list
                [status]="status"
                [term]="term"></todo-list>
      </div>
    `,
  styles: [
    `
        .egghead {    
            background: lightpink;
            padding: 20px;
            border-radius: 5px;
            border: solid 3px darkgrey;
            display : table;
        }
    `
  ]
})
export class EggheadApp {}
