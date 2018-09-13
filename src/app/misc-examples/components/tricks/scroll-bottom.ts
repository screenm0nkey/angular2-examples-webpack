import {Component} from "@angular/core";
import {interval} from "rxjs";
import {map, scan, zip} from 'rxjs/operators';

@Component({
  selector: "scroll-bottom",
  styles: [
    `
      .list {
        height: 200px;
        overflow-y: scroll;
      }

      p {
        margin: 2px
      }

      p:nth-child(odd) {
        background: #eee;
      }
    `
  ],
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
  items$ = interval(1000)
    //@ts-ignore
    .pipe(zip(map((num: number) => Math.random())))
    .pipe(scan((acc, curr) => [...acc, curr], []))
}
