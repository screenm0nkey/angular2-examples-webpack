import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'error-dialog',
  template: `
    <div>
      <h4>Status: {{data.status}}</h4>
      <strong>Reason:</strong> {{data.reason}}

      <p class="strong">Press ESC to hide dialog</p>
    </div>
  `
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
