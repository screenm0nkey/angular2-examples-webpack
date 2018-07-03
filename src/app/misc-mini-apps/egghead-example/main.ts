import { Component } from "@angular/core";
import { TodoService } from "./services/todo-service";

@Component({
  providers: [TodoService], // this provides the service to all of it's children components
  styles: [
    `   .comps {    
            position:relative;
            top : 46px;
        }
    `
  ],
  template: `
      <div class="comps">
        <section>
          <h4>Egghead example from john Liquist</h4>

          <p>Take a look at the <strong>Todo Service (segghead-example/services/todo-service.ts) </strong>and see how the it keeps the data immutable.</p>
          <p>Also see how the pipes work by creating a new data array rather than mutating the array</p>

            <p><a target="_blank" href="https://egghead.io/series/angular-2-fundamentals">Fundamentals videos</a> </p>
        
            <search-box (update)="term = $event"></search-box>
            <new-todo></new-todo>
            <status-selector (select)="status = $event"></status-selector>
            <todo-list
                [status]="status"
                [term]="term"></todo-list>
        </section>
      </div>
    `
})
export class EggheadAppComponent {}
