import {InitialCapsPipe} from "./initial-caps.pipe";
import {SearchPipe} from "./search-pipe";
import {StartedPipe} from "./started-pipe";
import {FromNowPipe} from "./from-now.pipe";
import {CapitalizePipe} from "./capitalize.pipe";
import {FlyingHeroesImpurePipe, FlyingHeroesPipe} from "./flying-heros.pipe";

export const sharedPipes: Array<any> = [
  InitialCapsPipe,
  SearchPipe,
  StartedPipe,
  FromNowPipe,
  CapitalizePipe,
  FlyingHeroesPipe,
  FlyingHeroesImpurePipe
];
