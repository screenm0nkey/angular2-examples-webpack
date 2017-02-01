import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import * as Rx from "rxjs/Rx";
import {YoutubeService} from "./youtube-helpers/youtube-service";

@Component({
  selector: 'youtube-basic-example',
  providers: [FormBuilder],
  template: `
        <div class="search-results">
            <form [formGroup]="form" #f="ngForm" (ngSubmit)="onSubmit(f)">
                <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
                    <h4><label for="yts">Youtube basic search example </label></h4>
                    <input type="text" class="form-control" id="yst" placeholder="Youtube Search" formControlName="youtubeSearch">
                </div>
                <youtube-result-component *ngFor="let result of results" [result]="result"></youtube-result-component>
            </form>
        </div>
    `
})

export class YoutubeBasicExample {
  form: FormGroup;
  source: Rx.Observable<any>;
  observer: Rx.Observer<any>;
  results: any[] = [];

  constructor(fb: FormBuilder, public youtube: YoutubeService) {
    this.source = Rx.Observable.create((observer: Rx.Observer<any>) => this.observer = observer);

    this.form = fb.group({
      "youtubeSearch": ['', Validators.required]
    });

    this.form.controls['youtubeSearch'].valueChanges
      .subscribe((text: string) => this.observer.next(text))

    this.source
      .debounceTime(500)
      .switchMap((text: string) => this.youtube.search(text))
      .subscribe((results: any[]) => this.results = results);
  }

}
