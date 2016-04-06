import {Component } from 'angular2/core';
import { Control, ControlGroup, FORM_DIRECTIVES } from 'angular2/common';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

@Component({
    selector: 'reddit-example',
    directives: [FORM_DIRECTIVES],
    styles : [require('./main.css')],
    template: `
        reddit.ts <br>
        <div class="search-results">
            <form [ngFormModel]="searchForm">
                Reddit Search using the <strong>"form Control.valueChanges"</strong> method of  <input type="text" ngControl="searchField" />
            </form>
            <img src="/images/loading.gif" *ngIf="loading">
            <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
                <div class="box" *ngFor="#r of results | async">
                    <img *ngIf="r.thumb" [src]="r.thumb">
                    <span>{{r.title}}</span><a [href]="r.url">Link</a>
                </div>
            </div>
        </div>
        <hr>
    `,
})
export class RedditExample {
    searchForm:ControlGroup;
    results:Observable<any[]>;
    loading:boolean = false;

    constructor(private http:Http) {
        let searchField = new Control();
        this.searchForm = new ControlGroup({searchField});

        this.results = searchField.valueChanges
            .debounceTime(500)
            .do(()=> this.loading = true)
            .switchMap((val:string) => {
                return this.searchRedditPics(val);
            })
            .do(()=> this.loading = false);

        this.results.subscribe(x=>console.log(x));
    }

    searchRedditPics(search:string) {
        let baseUrl = 'https://www.reddit.com/r/pics/search.json?restrict_sr=on&q=';
        return this.http.get(baseUrl + search)
            .map(res => res.json())
            .map(this.normaliseRedditData)
            .map((items : any[]) => items.filter((item:any) => item.url));

    }

    normaliseRedditData(items:any) {
        if (items.data) {
            let children:any[] = items.data.children;
            return children.map((child:any) => {
                if (child && child.data && child.data.thumbnail) {
                    let d = child.data;
                    console.log(d);
                    if (d.thumbnail && d.thumbnail.startsWith('http')) {
                        return {
                            thumb: d.thumbnail,
                            title: d.title || 'No title',
                            url : d.url
                        }
                    }
                }
                return {};
            });
        }
    }
}
