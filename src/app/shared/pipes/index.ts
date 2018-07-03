import {InitialCapsPipe} from "./initial-caps.pipe";
import {SearchPipe} from "./search-pipe";
import {StartedPipe} from "./started-pipe";
import {FromNowPipe} from "./FromNowPipe";
import {CapitalizePipe} from "./capitalize.pipe";

export const sharedPipes: Array<any> = [InitialCapsPipe, SearchPipe, StartedPipe, FromNowPipe, CapitalizePipe];
