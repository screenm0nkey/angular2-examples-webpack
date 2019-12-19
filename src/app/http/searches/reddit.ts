import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {debounceTime, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'reddit-example',
  template: `
        <p class='path'>/http-rxjs/searches/reddit.ts</p>
        <h4>Reddit Search using the <highlight>'form FormControl.valueChanges'</highlight></h4>
        
        <div class='search-results' style='padding-bottom: 10px'>
            <form [formGroup]='searchForm'>
                <input type='text' formControlName='searchField' placeholder='Search Reddit'/>
            </form>
            <img src='/images/loading.gif' *ngIf='loading'>
            <div style='max-height: 300px; overflow: hidden; overflow-y: scroll'>
                <div class='box' *ngFor='let r of results$ | async'>
                    <img *ngIf='r.thumb' [src]='r.thumb'>
                    <span>{{r.title}}</span><a [href]='r.url'>Link</a>
                </div>
            </div>
        </div>
    `
})
export class RedditExample {
  searchForm: FormGroup;
  results$: Observable<any[]>;
  loading: boolean = false;

  constructor(private http: HttpClient) {
    let searchField = new FormControl();
    this.searchForm = new FormGroup({searchField});

    this.results$ = searchField.valueChanges
      .pipe(debounceTime(500))
      .pipe(tap(() => (this.loading = true)))
      .pipe(switchMap((val: string) => this.searchRedditPics(val)))
      .pipe(tap(() => (this.loading = false)));

    this.results$.subscribe(x => console.log(x));
  }

  searchRedditPics(search: string): Observable<any> {
    return this.http
      .get(`https://www.reddit.com/r/pics/search.json?resct_sr=on&q=${search}`)
      .pipe(map(this.normaliseRedditData))
      .pipe(map((items: any[]) => items.filter((item: any) => item.url)));
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
            };
          }
        }
        return {};
      });
    }
  }
}
