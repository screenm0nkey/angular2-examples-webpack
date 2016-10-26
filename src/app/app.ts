import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../styles/app.css'),
    require('../styles/main.css')
  ],
})
export class AppComponent {
}
