import {Component} from '@angular/core';
import {LoggerService}  from '../logger.service';

@Component({
  selector: 'spy-parent',
  template: `
  <div class="parent">
    <h4>Spy Directive</h4>
    <pre>
    Directives have lifecycle hooks too. We create a SpyDirective that logs when 
    the element it spies upon is created or destroyed using the 
    ngOnInit and ngOnDestroy hooks.

    We apply the SpyDirective to a div in an ngFor hero repeater 
    managed by the parent SpyComponent.
    </pre>
    <p>
      <input [(ngModel)]="newName"
            (keyup.enter)="addHero()"
            placeholder="Hero name">
      <button (click)="addHero()">Add Hero</button>
      <button (click)="reset()">Reset Heroes</button>
    </p>` +
    `<div *ngFor="let hero of heroes"  my-spy  class="heroes">
       {{hero}}
     </div>`
+ `<h4>-- Spy Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of spyLog">{{msg}}</div>
   </div>
  `,
  styles: [
     '.parent {background: khaki;}',
     '.heroes {background: LightYellow; padding: 0 8px}'
  ],
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes:string[] = ['Windstorm', 'Magneta'];
  spyLog:string[];

  constructor(private _logger:LoggerService){
    this.spyLog = _logger.logs;
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this._logger.tick();
    }
  }
  removeHero(hero:string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this._logger.tick();
  }
  reset(){
    this._logger.log('-- reset --');
    this.heroes.length = 0;
    this._logger.tick();
  }
}
