import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

/**
 * This component's instances are generated dynamically in the ControlErrorsDirective using ComponentRef. 
 */
@Component({
  template: `<p class="help is-danger" [class.hide]="_hide">Watch out!!! {{_text}}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.hide {display: none }']
})
export class ControlErrorComponent {
  _text : string;
  _hide : boolean = true;

  @Input() set text(value:string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }


}