import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as Rx from "rxjs/Rx";
import {YoutubeService} from "./youtube-helpers/youtube-service";

@Component({
  selector: "youtube-basic-example",
  providers: [FormBuilder],
  template: `
        <div class="search-results" style="padding-bottom: 10px;">
        <p class="path">/http-rxjs/searches/youtube-basic.ts</p>
        <h4>Youtube basic search example </h4>
            <form [formGroup]="form" #f="ngForm" (ngSubmit)="onSubmit(f)">
                <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Youtube Search" 
                      formControlName="youtubeSearch">
                </div>
                <youtube-result-component 
                  *ngFor="let result of results" 
                  [result]="result">
                </youtube-result-component>
            </form>
        </div>
    `
})
export class YoutubeBasicExample implements OnInit {
  form: FormGroup;
  subject$: Rx.Subject<any>;
  results: any[] = [];

  constructor(private fb: FormBuilder, public youtube: YoutubeService) {
    this.subject$ = new Rx.Subject();
  }

  ngOnInit() {
    this.form = this.fb.group({
      youtubeSearch: ["", Validators.required]
    });

    this.form.controls.youtubeSearch.valueChanges
      .filter(this.isLongerThanOneChar.bind(this))
      .subscribe(text => this.subject$.next(text));

    this.subject$
      .debounceTime(500)
      .switchMap((text: string) => this.youtube.search(text))
      .subscribe((results: any[]) => this.results = results);
  }

  isLongerThanOneChar(text: string) {
    if (text.length <= 1) this.results = [];
    return text.length > 1;
  }

  onSubmit(val: FormGroup) {
    console.log(101, val);
  }
}
