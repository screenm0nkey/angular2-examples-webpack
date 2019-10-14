import {Component} from '@angular/core';
import {Hero} from '../../../shared/pipes/flying-heros.pipe';

@Component({
  selector: 'pipes-component',
  template: `
    <div class='comps'>

      <section>
        <p class="path">misc-examples/components/dependency-injection/pipes.component.ts</p>
        <h4>Pipes</h4>
        <p class="links">
          <external-link [id]="68"></external-link>
          <external-link [id]="5"></external-link>
        </p>

        <p><strong>There are two categories of pipes: pure and impure</strong>.
          Pipes are pure by default. You make a pipe impure by setting its pure flag to false.
        </p>

        <p><strong>Angular executes a pure pipe only when it detects a pure change to the input value. </strong>A pure
          change is either a change to a primitive input value (String, Number, Boolean, Symbol) or a changed object
          reference (Date, Array, Function, Object).</p>

        <p><strong>Angular puts an additional restriction on a pipe to be
          considered pure — the input to the pipe cannot be mutable</strong>. If the input is mutable, a pipe need to be
          re-evaluated on every digest because an input object can be mutated without changing the object reference (the
          pipe parameter stays the same). And that’s exactly why both JsonPipe and SlicePipe pipes are not considered
          pure despite not having an internal state.</p>

        <p><code>onChanges()</code> lifecycle hook will be called when any of the @inputs properties change</p>

        <p>This may seem restrictive but it's also fast. An object reference check is fast—much faster than a deep check
          for differences</p>

        <p>Angular executes an impure pipe during every component change detection cycle. An impure pipe is called
          often, as often as every keystroke or mouse-move</p>

       

      </section>

      <section>
        <p class="path">misc-examples/components/dependency-injection/pipes.component.ts</p>
        
        <p>Notice below when adding Impure values, the Pure list does not update. This is because it is Pure and will 
          only update when it's @Input changes. 
        </p>
        
        <p>The Impure list updates when adding to the Pre list as it's Impure and will update on every digest loop.</p>
        
        <p>See the console for out put.</p>
        
        <input type='text' placeholder='Type Name' #name>
        <button (click)='addImpureHero(name)'>Add Impure Hero</button>
        <button (click)='addPureHero(name)'>Add Pure Hero.</button>

        <span class='title'>Pure</span>
        <div *ngFor='let hero of (heroes | flyingHeroesPure)'>
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
  protected heroes: Hero[];

  constructor() {
    this.heroes = [
      {name: 'Nick', canFly: true},
      {name: 'Liz', canFly: true}
    ];
  }

  addImpureHero(el: HTMLInputElement) {
    this.heroes.push({name: el.value, canFly: true});
    el.value = '';
  }

  addPureHero(el: HTMLInputElement) {
    this.heroes = [...this.heroes, {name: el.value, canFly: true}];
  }


}
