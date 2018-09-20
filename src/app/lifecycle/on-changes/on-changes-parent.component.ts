import { Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from './on-changes.component';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes-parent',
  styles: ['.parent {background: Lavender;}'],
  template: `
     <div class='comps'>
        <div class='parent'>
          <h4>{{title}}</h4>
          <p>
            Notice that updating hero's name doesn't cause the onChange to be invoked but changing the power does. 
            <strong>this is because we are changing a property on the @input object and not the object reference.
            so we would need to introduce Immutability for this to work.</strong>
          </p>
          <table>
            <tr><td>Power: </td><td><input [(ngModel)]='power'></td></tr>
            <tr><td>Hero.name: </td><td><input [(ngModel)]='hero.name'></td></tr>
          </table>
          <p><button (click)='reset()'>Reset Log</button></p>
        
          <on-changes [hero]='hero' [power]='power'></on-changes>
        </div>
      </div>
    `
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time$; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    this.childView && this.childView.reset();
  }
}
