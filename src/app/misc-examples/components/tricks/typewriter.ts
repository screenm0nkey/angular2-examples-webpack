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
export class AppComponent {
    text = `Bacon ipsum dolor amet tongue short loin short ribs pork chop drumstick picanha pancetta shank cow shoulder salami corned beef swine pig sausage. Rump flank sirloin kielbasa jowl chuck sausage jerky short loin chicken. Flank sirloin frankfurter corned beef turducken. Beef ribs salami ribeye, t-bone meatloaf flank jerky tongue turkey frankfurter kevin.
Jowl pastrami ground round biltong ribeye drumstick frankfurter turkey prosciutto tenderloin corned beef shankle meatball strip steak tail. Tenderloin flank picanha short loin, alcatra spare ribs sausage leberkas pig tail. Prosciutto spare ribs ham, leberkas pork loin pastrami alcatra. Strip steak t-bone pork belly ham hock drumstick spare ribs. Sausage corned beef prosciutto jowl flank biltong. Corned beef pork loin landjaeger pork belly tail, venison strip steak beef fatback bresaola shankle cupim tongue ribeye.
Meatloaf ribeye ground round salami drumstick shankle. Rump meatloaf ground round frankfurter, sirloin drumstick flank meatball short loin shankle chuck bacon sausage. Meatball swine meatloaf pastrami fatback. Kielbasa flank frankfurter hamburger pastrami. Doner porchetta kielbasa salami alcatra kevin beef ribs sirloin pork belly. T-bone tri-tip meatloaf, pancetta ball tip jowl ham meatball.
Ground round prosciutto boudin corned beef chicken turducken tail short loin pork loin salami strip steak swine. Rump ham picanha tri-tip pastrami kevin andouille. Cupim pork ribeye capicola flank sirloin meatball jowl swine short loin ball tip drumstick. Cupim tenderloin jowl alcatra, pancetta sirloin tri-tip short loin leberkas.
Strip steak chicken pork loin ball tip turducken corned beef cow venison flank pork chop drumstick shoulder filet mignon landjaeger. Ball tip turducken ham cupim swine shoulder t-bone boudin. Leberkas fatback pastrami, hamburger cupim picanha beef. Strip steak tri-tip pork loin alcatra brisket pork belly swine rump corned beef meatloaf. Swine flank sirloin beef ribs biltong frankfurter, jerky tail pork belly prosciutto meatloaf kevin cow pancetta pork.
Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!`;

    typewriter$ = Observable
        .from(this.text.split(""))
        .scan((acc, curr)=> acc + curr)
        .zip(Observable.interval(50), (x)=> x);
}