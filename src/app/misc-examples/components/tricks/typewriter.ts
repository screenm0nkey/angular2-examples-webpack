import { Component, OnInit } from "@angular/core";
import { from, interval, Observable } from "rxjs";
import { scan, zip } from "rxjs/operators";

@Component({
  selector: "typewriter",
  template: `
    <h4>Using Scan and Zip to show characters</h4>
    <div>
      {{ typewriter$ | async }}
    </div>
  `
})
export class Typewriter implements OnInit {
  text: string;
  typewriter$: Observable<string>;

  ngOnInit() {
    this.text = `Bacon ipsum dolor amet tongue short loin short ribs pork chop drumstick picanha 
            pancetta shank cow shoulder salami corned beef swine pig sausage. Rump flank 
            sirloin kielbasa jowl chuck sausage jerky short loin chicken. Flank sirloin frankfurter 
            corned beef turducken. Beef ribs salami ribeye, t-bone meatloaf flank jerky tongue turkey`;

    this.typewriter$ = from(this.text.split(""))
      .pipe(scan((acc: string, curr: string) => acc + curr))
      .pipe(zip(interval(50), x => x));
  }
}
