import {Component} from '@angular/core';
import {TodoService} from './services/todo-service';

@Component({
  providers: [TodoService], // this provides the service to all of it's children components
  template: `
    <div class='comps'>
      <section>
        <p class="path">misc-mini-apps/egghead-example/main.ts</p>
        <h4>Egghead example from John Liquist</h4>

        <p>Take a look at the Todo Service <code>misc-mini-apps/egghead-example/services/todo-service.ts</code>and see
          how the it keeps the data immutable.</p>
        <p>Also see how the pipes work by creating a new data array rather than mutating the exiting array</p>

        <p><a target='_blank' href='https://egghead.io/series/angular-2-fundamentals'>See example on Fundamentals
          videos</a></p>

        <search-box (update)='term = $event'></search-box>

        <new-todo></new-todo>

        <status-selector (select)='status = $event'></status-selector>

        <todo-list
          [status]='status'
          [term]='term'></todo-list>
      </section>
    </div>
  `
})
export class EggheadAppComponent {
  status: string;
  term: string;
}
