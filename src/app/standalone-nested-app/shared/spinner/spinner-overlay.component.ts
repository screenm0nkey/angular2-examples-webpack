import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay',
  template: `
    <div class="spinner-wrapper">
      <app-spinner></app-spinner>
    </div>
  `,
  styleUrls: ['./spinner.scss']
})
export class SpinnerOverlayComponent implements OnInit {
  @Input() public message: string;
  constructor() { }

  public ngOnInit() { }
}
