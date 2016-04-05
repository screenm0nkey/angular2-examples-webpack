import { Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import * as Rx from "rxjs/Rx";
import {YoutubeService} from './youtube-helpers/youtube-service';
import {YoutubeResultComponent} from './youtube-helpers/youtube-result-component';
import {SearchResult} from './youtube-helpers/youtube-result-class';


@Component({
    selector: 'local-ref-search',
    providers: [YoutubeService],
    directives: [FORM_DIRECTIVES, YoutubeResultComponent],
    template: `
        <div class="search-results">
            <label for="yts">Local ref on input Youtube search example </label>
            <input #inny (keyup)="getValue(inny.value)" placeholder="Youtube Search">
            <pre>There are {{results.length}} search results for {{searchTerm}}</pre>
            <youtube-result-component *ngFor="#result of results" [result]="result"></youtube-result-component>
        </div>
        <hr>
    `
})
export class LocalRefSearch {
    source:Rx.Observable<any>;
    observer:Rx.Observer<any>;
    results:SearchResult[] = [];
    searchTerm:string = '';

    constructor(public youtube:YoutubeService) {
        this.source = Rx.Observable.create((observer: Rx.Observer<any>) => this.observer = observer);

        this.source
            .debounceTime(500)
            .do((text:string) => this.searchTerm = text)
            .switchMap((text:string) => this.youtube.search(text)) //i think switchMap used to be flatMapLatest
            .subscribe((results:SearchResult[]) => this.results = results);
    }

    getValue(value) {
        this.observer.next(value);
    }

}
