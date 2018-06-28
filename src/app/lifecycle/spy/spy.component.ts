import {Component} from "@angular/core";
import {LoggerService} from "../logger.service";

@Component({
  selector: "spy-parent",
  template:
  `
  <div class="comps">
    <div class="parent">
      <p class="path">src/app/lifecycle/spy/spy.component.ts</p>
      <h4>Spy Directive</h4>
      <p>
        <strong>Directives have lifecycle hooks too</strong>. We create a SpyDirective that logs when
        the element it spies upon is created or destroyed using the
        <code>ngOnInit</code> and <code>ngOnDestroy</code> hooks. </p>
      <p>
        We apply the SpyDirective to a div in an ngFor hero repeater
        managed by the parent SpyComponent.
      </p>
      <p>
        <input
          [(ngModel)]="newName"
          (keyup.enter)="addHero()"
          placeholder="Hero name">
        <button (click)="addHero()">Add Hero</button>
        <button (click)="reset()">Reset Heroes</button>
      </p>
      <div *ngFor="let hero of heroes" class="heroes" my-spy>
      {{hero}}
    </div>
      <h4>-- Spy Lifecycle Hook Log --</h4>
      <div *ngFor="let msg of spyLog">{{msg}}</div>
    </div>
  </div>
  `,
  styles: [
    ".parent {background: khaki;}",
    ".heroes {background: LightYellow; padding: 0 8px}"
  ],
  providers: [LoggerService]
})
export class SpyParentComponent {
  newName = "Herbie";
  heroes: string[] = ["Windstorm", "Magenta"];
  spyLog: string[];

  constructor(private _logger: LoggerService) {
    this.spyLog = _logger.logs;
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = "";
      this._logger.tick();
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this._logger.tick();
  }

  reset() {
    this._logger.log("-- reset --");
    this.heroes.length = 0;
    this._logger.tick();
  }
}
