import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay-wrapper',
  template: `
    <div class="wrapper">
      <div class="overlay">
        <div class="spinner-wrapper">
          <app-spinner></app-spinner>
        </div>
      </div>

      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./spinner.scss']
})
export class SpinnerOverlayWrapperComponent {


}
