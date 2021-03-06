import { Component, EventEmitter, Input, Output } from "@angular/core";

/**
 * 
 */
@Component({
  selector: "toggle-button",
  styles: ["button.off { background : black; color : white;}"],
  template: `
    <button (click)="onClick($event)" [ngClass]="nick ? 'on' : 'off'">
      <ng-content></ng-content>
    </button>
  `
})
export class ToggleButton {
  @Input() nick = true;
  @Output() nickChange = new EventEmitter();

  onClick(event: MouseEvent) {
    console.log(event);
    this.nick = !this.nick;
    this.nickChange.emit(this.nick);
  }
}

/**
 * 
 */
@Component({
  selector: "toggle-component",
  template: `
    <p class="path">misc-examples/components/input-binding/toggle-button.ts</p>
    <h4>Two way binding with a custom event</h4>
    <p><dlink [id]="57"></dlink></p>
    
    <p>
      For two way custom event to work you have to suffix the event name with
      'Change' i.e if the @input value is 'nick' then the @output becomes
      'nickChange'
    </p>
    <p>
      This code <code><lgt>toggle-button [(nick)]='state'</lgt></code> is
      passing the input binding 'nick' into the child component and also
      listening for the 'nick' event.
    </p>

    <p class="highlight">
      The event is is emitted from the child by appending the word 'Change' to
      the end of the input binding name i.e 'nick'+'Change'
      <code>this.nickChange.emit(value);</code>
    </p>

    <toggle-button [(nick)]="state">{{ state ? "On" : "Off" }}</toggle-button>
    <h3 *ngIf="state">Hello</h3>
  `
})
export class ToggleButtonComponent {
  state: boolean = false;
}
