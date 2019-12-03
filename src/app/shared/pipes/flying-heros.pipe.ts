import {Pipe, PipeTransform} from '@angular/core';

export type Hero = {
  name: string;
  canFly: boolean;
  date ?: Date;
}

@Pipe({
  name: 'flyingHeroesPure',
  pure: true // this is the default
})
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
    console.log('%cImpure filter', 'color:red');
    return allHeroes.filter(hero => hero.canFly);
  }
}
