import {Component} from "@angular/core";
import {from, interval} from "rxjs";
import {scan, zip} from 'rxjs/operators';
import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/zip";

@Component({
  selector: "typewriter",
  template: `
    <div>
      {{typewriter$ | async}}
    </div>`
})
export class Typewriter {
  text = `Bacon ipsum dolor amet tongue short loin short ribs pork chop drumstick picanha 
            pancetta shank cow shoulder salami corned beef swine pig sausage. Rump flank 
            sirloin kielbasa jowl chuck sausage jerky short loin chicken. Flank sirloin frankfurter 
            corned beef turducken. Beef ribs salami ribeye, t-bone meatloaf flank jerky tongue turkey`;

  typewriter$ = from(this.text.split(""))
    .pipe(scan((acc, curr) => acc + curr))
    .pipe(zip(interval(50), x => x));
}
