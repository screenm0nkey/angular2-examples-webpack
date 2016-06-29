import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/zip';

@Component({
    selector: 'typewriter',
    template: `<div>
        {{typewriter$ | async}}
    </div>`
})
export class Typewriter {
    text = `Bacon ipsum dolor amet tongue short loin short ribs pork chop drumstick picanha 
            pancetta shank cow shoulder salami corned beef swine pig sausage. Rump flank 
            sirloin kielbasa jowl chuck sausage jerky short loin chicken. Flank sirloin frankfurter 
            corned beef turducken. Beef ribs salami ribeye, t-bone meatloaf flank jerky tongue turkey`;

    typewriter$ = Observable
        .from(this.text.split(""))
        .scan((acc, curr)=> acc + curr)
        .zip(Observable.interval(50), (x)=> x);
}