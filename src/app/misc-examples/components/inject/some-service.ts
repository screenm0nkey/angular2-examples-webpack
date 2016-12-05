import {Injectable} from "@angular/core";

// These services are used in the injecting-token.ts examples

var sscounter = 0;
@Injectable()
export class SomeService {
  public count: number;

  constructor() {
    this.count = ++sscounter;
  }

  callMe(s: String) {
    console.log(this.count, `SomeService instance id=${this.count}`, s);
  }
}

var encounter = 0;
@Injectable()
export class EngineService {
  public count: number;

  constructor() {
    this.count = ++encounter;
  }

  callMe(s: String) {
    console.log(this.count, `EngineService instance id=${this.count}`, s);
  }
}

@Injectable()
export class ParamService {
  constructor(private phrase: string, num: number) {
    console.log(333, 'ParamService is being created with phrase', phrase, num);
  }

  getValue(): string {
    return this.phrase;
  }
}

@Injectable()
export class RubbishService {
  imANumber: number = 11;
}
