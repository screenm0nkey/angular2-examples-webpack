import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { interval } from "rxjs";
import { map, scan, tap } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "scroll-bottom",
  styles: [
    `
      .list {
        height: 200px;
        overflow-y: scroll;
      }
      p {
        margin: 2px;
      }
      p:nth-child(odd) {
        background: #eee;
      }
    `
  ],
  template: `
    <h4>Scroll Bottom</h4>
    <div #list class="list" [scrollTop]="scrollHeight">
      <ul>
        <li *ngFor="let item of items$ | async">{{ item }}</li>
      </ul>
    </div>

    
  `
})
export class ScrollComponent implements OnInit {
  items$: any; //Observable<number[]>;
  @ViewChild('list', {static:false}) list : ElementRef;
  scrollHeight:number;

  ngOnInit() {
    this.items$ = interval(1000)
      .pipe(map((num: number) => Math.random()))
      .pipe(scan((acc: number[], num: number) => [...acc, num], []))
      .pipe(tap(()=>{
        this.scrollHeight = this.list.nativeElement.scrollHeight + 18;
      }));
  }
}
