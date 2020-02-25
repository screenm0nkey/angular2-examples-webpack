import { Component } from "@angular/core";
import { Hero } from "../../../shared/pipes/flying-heros.pipe";

@Component({
  selector: "pipes-component",
  templateUrl: './pipes.component.html' 
})
export class PipesComponent {
  public heroes: Hero[];

  constructor() {
    this.heroes = [
      { name: "Nick", canFly: true, date : new Date() },
      { name: "Liz", canFly: true, date : new Date()}
    ];
  }

  addImpureHero(el: HTMLInputElement) {
    this.heroes.push({ name: el.value, canFly: true });
    el.value = "";
  }

  addPureHero(el: HTMLInputElement) {
    // notice we're
    this.heroes = [...this.heroes, { name: el.value, canFly: true }];
  }
}
