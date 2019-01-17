import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'error-dialog',
  template: `
    <div>
      Reason: {{data.reason}} <br>
      Status: {{data.status}}
    </div>
  `
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
