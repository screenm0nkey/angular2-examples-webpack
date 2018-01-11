import "./polyfills.browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

declare module "rxjs/Observable" {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Observable } from "rxjs";

const debuggerOn = true;

Observable.prototype.debug = function(num: number, message: string) {
  return this.do(
    function(next) {
      if (debuggerOn) {
        console.log(num, message, next);
      }
    },
    function(err) {
      if (debuggerOn) {
        console.error("ERROR >>> ", message, err);
      }
    },
    function() {
      if (debuggerOn) {
        console.log("Completed.");
      }
    }
  );
};
/**
 * To make zones faster it is possible to bypass zones entirely for performance focused applications.
 * To bypass zones, bootstrap your application with ‘noop’ as your ngZone.
 * platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'}).then( ref => {} );
 */
platformBrowserDynamic().bootstrapModule(AppModule);
