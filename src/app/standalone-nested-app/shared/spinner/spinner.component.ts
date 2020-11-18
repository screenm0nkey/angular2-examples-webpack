import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="container">
      <div class="row">
        <div id="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="loading"></div>
        </div>

        <p class="spinner-message" *ngIf="message && message !== ''">
          {{message}}
        </p>
      </div>
    </div>
  `,
})
export class SpinnerComponent {
  @Input() message = '';

}
