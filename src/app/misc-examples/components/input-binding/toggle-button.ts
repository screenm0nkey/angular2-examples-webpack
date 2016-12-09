import {Component, Input, Output, EventEmitter} from '@angular/core';
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
    <h4>Two way binding on a custom event</h4>
    
    <p><a href="https://egghead.io/lessons/angular-2-angular-2-building-a-toggle-button-component">Building a toggle button</a></p>
    <p>For two way custom event to work you have to suffix the event name with 'Change' i.e if the @input value is 'nick' then the @output becomes 'nickChange'</p>
<pre>
@Input() nick = true;
@Output() nickChange = new EventEmitter();
&lt;toggle-button [(nick)]="state"&gt;
</pre>
    <toggle-button [(nick)]="state">
     {{state ? 'On' : 'Off'}}
    </toggle-button>
    <h3 *ngIf="state">Hello</h3>
    
  `
})
export class ToggleButtonComponent {
  state: boolean = false;
}
