import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

// https:// angular.io/guide/router
@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      // add the route path to our preloaded module array
      this.preloadedModules.push(route.path);
      console.log('%cPRELOADED-ROUTES: ' + route.path, 'color:deeppink');
      return load();
    } else {
      return of(null);
    }
  }
}
