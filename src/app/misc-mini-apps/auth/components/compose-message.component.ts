import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../animations';

@Component({
  template: `
    <h3>Contact Crisis Center</h3>
    <div *ngIf='details'>
      {{ details }}
    </div>
    <div>
      <div>
        <label>Message: </label>
      </div>
      <div>
        <textarea [(ngModel)]='message' rows='10' cols='35' [disabled]='sending'></textarea>
      </div>
    </div>
    <p *ngIf='!sending'>
      <button (click)='send()'>Send</button>
      <button (click)='cancel()'>Cancel</button>
    </p>
  `,
  styles: [
    ':host { position: relative; left: 250px; top: 10%; background-color: white; border: solid 4px red; padding: 10px; }'
  ],
  // this is a custom animation
  animations: [slideInDownAnimation]
})
export class ComposeMessageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block'; // set the host element style to block
  @HostBinding('style.position') position = 'absolute';

  details: string;
  message: string;
  sending: boolean = false;

  constructor(public router: Router) {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
