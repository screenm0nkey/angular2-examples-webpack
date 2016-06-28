import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'scroll-bottom',
    styles: [`
    .list{height: 200px; overflow-y: scroll;}
    p{margin: 2px}
    p:nth-child(odd){background: #eee;}
  `],
    template: `
    <h4>Scroll Bottom</h4>
    <div #list class="list" [scrollTop]="list.scrollHeight">
      <p *ngFor="let item of items$ | async">
        {{item}}
      </p>
    </div>
  `
})
export class ScrollComponent {
    items$ = Observable
        .interval(250)
        .map(_ => Math.random())
        .startWith([])
        .scan((acc, curr)=> [...acc, curr]);
}