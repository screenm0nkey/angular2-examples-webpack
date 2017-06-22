import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/do";

@Component({
  selector: 'reddit-example',
  template: `
        <p class="file">src/app/http-rxjs/searches/reddit.ts</p>
        <h4>Reddit Search using the <strong>"form FormControl.valueChanges"</strong></h4>
        
        <div class="search-results" style="padding-bottom: 10px">
            <form [formGroup]="searchForm">
                <input type="text" formControlName="searchField" placeholder="Search Reddit"/>
            </form>
            <img src="/images/loading.gif" *ngIf="loading">
            <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
                <div class="box" *ngFor="let r of results$ | async">
                    <img *ngIf="r.thumb" [src]="r.thumb">
                    <span>{{r.title}}</span><a [href]="r.url">Link</a>
                </div>
            </div>
        </div>
    `,
})
export class RedditExample {
  searchForm: FormGroup;
  results$: Observable<any[]>;
  loading: boolean = false;

  constructor(private http: Http) {
    let searchField = new FormControl();
    this.searchForm = new FormGroup({searchField});

    this.results$ = searchField.valueChanges
      .debounceTime(500)
      .do(() => this.loading = true)
      .switchMap((val: string) => {
        return this.searchRedditPics(val);
      })
      .do(() => this.loading = false);

    this.results$.subscribe(x => console.log(x));
  }

  searchRedditPics(search: string) {
    let baseUrl = 'https://www.reddit.com/r/pics/search.json?resct_sr=on&q=';
    return this.http.get(baseUrl + search)
      .map(res => res.json())
      .map(this.normaliseRedditData)
      .map((items: any[]) => items.filter((item: any) => item.url));
  }

  normaliseRedditData(items: any) {
    if (items.data) {
      let children: any[] = items.data.children;
      return children.map((child: any) => {
        if (child && child.data && child.data.thumbnail) {
          let d = child.data;
          if (d.thumbnail && d.thumbnail.startsWith('http')) {
            return {
              thumb: d.thumbnail,
              title: d.title || 'No title',
              url: d.url
            }
          }
        }
        return {};
      });
    }
  }
}
