import {InitialCapsPipe} from './initial-caps.pipe';
import {FromNowPipe} from './from-now.pipe';
import {CapitalizePipe} from './capitalize.pipe';
import {FlyingHeroesImpurePipe, FlyingHeroesPipe} from './flying-heros.pipe';

export const sharedPipes: Array<any> = [
  InitialCapsPipe,
  FromNowPipe,
  CapitalizePipe,
  FlyingHeroesPipe,
  FlyingHeroesImpurePipe
];
