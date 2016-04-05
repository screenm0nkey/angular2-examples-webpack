import { Component } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES} from 'angular2/common';
import * as Rx from "rxjs/Rx";
import {YoutubeService} from './youtube-helpers/youtube-service';
import {YoutubeResultComponent} from './youtube-helpers/youtube-result-component';




@Component({
    selector: 'youtube-basic-example',
    providers: [FormBuilder, YoutubeService],
    directives : [FORM_DIRECTIVES, YoutubeResultComponent],
    template: `
        <div class="search-results">
            <form [ngFormModel]="form" (submit)="onSubmit(f)" #f="ngForm">
                <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
                    <label for="yts">Youtube basic search example </label>
                    <input type="text" class="form-control" id="yst" placeholder="Youtube Search" ngControl="youtubeSearch">
                </div>
                <youtube-result-component *ngFor="#result of results" [result]="result"></youtube-result-component>
            </form>
        </div>
        <hr>
    `
})

export class YoutubeBasicExample {
    form : ControlGroup;
    source:Rx.Observable<any>;
    observer:Rx.Observer<any>;
    results:any[] = [];

    constructor(fb: FormBuilder, public youtube:YoutubeService) {
        this.source = Rx.Observable.create((observer: Rx.Observer<any>) => this.observer = observer);

        this.form = fb.group({
            "youtubeSearch": ['', Validators.required]
        });

        this.form.controls['youtubeSearch'].valueChanges
            .subscribe((text:string) => this.observer.next(text))

        this.source
            .debounceTime(500)
            .switchMap((text:string) => this.youtube.search(text))
            .subscribe((results:any[]) => this.results = results);
    }

}