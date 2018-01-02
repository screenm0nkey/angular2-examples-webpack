import { Component, ViewChild } from "@angular/core";
import { OnChangesComponent } from "./on-changes.component";

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: "on-changes-parent",
  styles: [".parent {background: Lavender;}"],
  template: `
        <div class="parent">
          <h2>{{title}}</h2>
          <pre>
            Notice that updating hero doesn't cause the onChange to be invoked. this is because
            we are changing a property on the @input object and not the object reference.
            so we would need to introduce Immutability for this to work.
          </pre>
          <table>
            <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
            <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
          </table>
          <p><button (click)="reset()">Reset Log</button></p>
        
          <on-changes [hero]="hero" [power]="power"></on-changes>
          <!--<do-check [hero]="hero" [power]="power"></do-check>-->iv
        </div>
    `
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = "OnChanges";
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time$; triggers onChanges
    this.hero = new Hero("Windstorm");
    // setting power only triggers onChanges if this value is different
    this.power = "sing";
    this.childView && this.childView.reset();
  }
}
