import {Pipe, PipeTransform} from '@angular/core';

export type Hero = {
  name: string;
  canFly: boolean;
}

@Pipe({name: 'flyingHeroes'})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    console.log('%cPure filter', 'color:green');
    return allHeroes.filter(hero => hero.canFly);
  }
}

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    console.log('Impure filter');
    return allHeroes.filter(hero => hero.canFly);
  }
}
