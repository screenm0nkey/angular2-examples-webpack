import { Component, EventEmitter, ElementRef, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

import {SearchResult} from './youtube-helpers/youtube-result-class';
import {YoutubeService} from './youtube-helpers/youtube-service';
import {YoutubeResultComponent} from './youtube-helpers/youtube-result-component';


@Component({
    selector: 'youtube-search',
    styles : [require('./main.css')],
    template: `<input>`,
    outputs: ['loading', 'results'],
    providers: [YoutubeService]
})
class YoutubeSearch implements OnInit {
    loading:EventEmitter<any> = new EventEmitter();
    results:EventEmitter<any> = new EventEmitter();

    constructor(private el:ElementRef, private ytService:YoutubeService) {
        console.log(this, ytService);
    }

    ngOnInit() {
        Rx.Observable.fromEvent(this.el.nativeElement, "keyup")
            .debounceTime(500)
            .map((e:any) => e.target.value)
            .filter((text:string) => text.length > 1)
            .do(() => this.loading.emit(true))
            .switchMap((query:string) => this.ytService.search(query))
            .subscribe(
                (results : SearchResult[]) => {
                    this.loading.emit(false);
                    this.results.emit(results);
                },
                (err:any) => {
                    console.log(err);
                    this.loading.emit(false);
                },
                () => {
                    this.loading.emit(false);
                }
            );
    }
}

@Component({
    selector: 'ngbook-youtube-example',
    directives: [YoutubeSearch, YoutubeResultComponent],
    template: `
        <div class="search-results">
            NG2-Book YouTube search example:
            <youtube-search
                (loading)="loading = $event"
                (results)="updateResults($event)">
            </youtube-search>
            <img src="/images/loading.gif" *ngIf="loading">
            <youtube-result-component *ngFor="#result of results" [result]="result"></youtube-result-component>
        </div>
        <hr>
    `
})
export class YoutubeExample {
    loading : boolean = false;
    results : SearchResult[];

    constructor() {
        console.log(this);
    }

    updateResults (results : SearchResult[]) {
        console.log(results);
        this.results = results;
    }
}