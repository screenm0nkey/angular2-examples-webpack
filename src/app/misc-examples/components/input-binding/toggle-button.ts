import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'toggle-button',
  styles: ['button.off { background : black; color : white;}'],
  template: `
    <button (click)="onClick($event)" [ngClass]="nick ? 'on' : 'off'">
      <ng-content></ng-content>
    </button>
  `
})
export class ToggleButton {
  @Input() nick = true;
  @Output() nickChange = new EventEmitter();

  onClick() {
    this.nick = !this.nick;
    this.nickChange.emit(this.nick);
  }
}

@Component({
  selector: 'toggle-component',
  template: `
    <p class='file'>misc-examples/components/input-binding/toggle-button.ts</p>
    <h4>Two way binding on a custom event</h4>
    <p><external-link [id]="57"></external-link></p>
    <p>
      It covers using transclusion in Angular 2, setting up your own two-way binding, and making the button into a
      reusable component.
    </p>
    <p>For two way custom event to work you have to suffix the event name with 'Change' i.e if the @input value is
      'nick' then the @output becomes 'nickChange'</p>
    <p>This code <code>&lt;toggle-button [(nick)]='state'&gt;</code> is passing the input binding 'nick' into the child
      component and also listening for the 'nick' event.
    <p class='strong'>The event is is emitted from the child by appending the word 'Change' to the end of the input
      binding name i.e 'nick'+'Change' <code>this.nickChange.emit(value);</code></p>

    <toggle-button [(nick)]='state'>
      {{state ? 'On' : 'Off'}}
    </toggle-button>
    <h3 *ngIf='state'>Hello</h3>

  `
})
export class ToggleButtonComponent {
  state: boolean = false;
}
