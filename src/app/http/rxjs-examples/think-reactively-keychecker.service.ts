import { Injectable } from '@angular/core';
import { fromEvent, Observable, timer } from "rxjs";
import {
  exhaustMap, filter,
  map,
  skip,
  take, takeUntil,
  takeWhile, tap
} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RxJsKeyChecker {

  private anyKeyWasPressed$: Observable<string>

  keyCombo(keyCombo: string[]): Observable<string> {
    console.log('%cKEY COMBO INIT', 'color:gold');
    const ifTheAKeyWasPressed$ = this.checkKeyWasPressed(keyCombo[0]);
    /*
      Whenever the 'a' key is pressed, we want to switchMap() to another Observable 
      that only becomes alive when the combo has started.
     */
    return ifTheAKeyWasPressed$.pipe(
      exhaustMap(() => {
        console.log('NOW WE ARE IN COMBO MODE');
        return this.anyKeyWasPressed$.pipe(
          takeUntil(
            timer(4000).pipe(
              tap(x => console.log("Timed Out"))
            )
          ),
          tap((key: string) => console.log(`%cKey=${key} : Made is past takeUntil(). Timer has been started as "a" key was pressed`, 'color:pink')),
          takeWhile((keyPressed, index) => keyCombo[index + 1] === keyPressed),
          tap((key: string) => console.log(`%cKey=${key} : Made it past takeWhile(). Keys Pressed in Correct Order ["a", "s", "d", "f"]`, 'color:orange')),
          skip(keyCombo.length - 2),
          take(1),
          tap(x => console.log("Completed", x)),
        );
      })
    );
  }

  checkKeyWasPressed(key: string): Observable<string> {
    console.log('%cCHECK KEY PRESSED INIT', 'color:gold');
    return this.anyKeyWasPressed$
      .pipe(
        filter(pressedKey => pressedKey === key),
        tap((pressedKey: string) => pressedKey === key && console.log('KEY COMBO TRIGGERED'))
      );
  }

  validateKeys(keys: string[]) {
    this.anyKeyWasPressed$ = fromEvent(document, "keypress")
      .pipe(
        map((event: KeyboardEvent) => event.key),
        tap((key: string) => console.log(key))
      );

    const comboTriggered$ = this.keyCombo(keys);
    return comboTriggered$;
  }
}



