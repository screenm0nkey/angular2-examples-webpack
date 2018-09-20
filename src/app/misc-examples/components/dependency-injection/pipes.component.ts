import {Component} from '@angular/core';
import {Hero} from '../../../shared/pipes/flying-heros.pipe';

@Component({
  selector: 'pipes-component',
  template: `
    <div class='comps'>
      <section>
        <p><strong>There are two categories of pipes: pure and impure</strong>. 
         Pipes are pure by default. You make a pipe impure by setting its pure flag to false.
          </p>
        
        <p><strong>Angular executes a pure pipe only when it detects a pure change to the input value. </strong>A pure 
        change is either a change to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference 
        (Date, Array, Function, Object) <br>
        
        <code>onChanges()</code> lifecycle hook, which will be called when any of the @inputs properties change</p>
      
        <p>This may seem restrictive but it's also fast. An object reference check is fast—much faster than a deep check 
        for differences</p>
        
        <p>Angular executes an impure pipe during every component change detection cycle. An impure pipe is called often, 
        as often as every keystroke or mouse-move</p>
        
    
      </section>
      
      
      <section>
        <p>See the console for out put.</p>
        <input type='text' placeholder='Type Name' #name>
        <button (click)='addHero(name)'>Add Impure Hero</button>
        <button (click)='addPureHero(name)'>Add Pure Hero. </button>
        <span class='title'>Pure</span>
        <div *ngFor='let hero of (heroes | flyingHeroes)'>
          {{hero.name}}
        </div>
        <span class='title'>ImPure</span>
        <div *ngFor='let hero of (heroes | flyingHeroesImpure)'>
          {{hero.name}}
        </div>
      </section>
    </div>
  `
})
export class PipesComponent {
  private heroes: Hero[];

  constructor() {
    this.heroes = [{name: 'Nick', canFly: true}, {name: 'Liz', canFly: true}]
  }

  addHero(el: HTMLInputElement) {
    this.heroes.push({name: el.value, canFly: true})
    el.value = '';
  }

  addPureHero(el: HTMLInputElement) {
    this.heroes = [...this.heroes, {name: el.value, canFly: true}];
  }


}
