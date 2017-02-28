import {Injectable} from "@angular/core";

// These services are used in the injecting-token.ts examples

@Injectable()
export class SomeService {
  static counter : number = 0;
  public count: number;

  constructor() {
    this.count = ++SomeService.counter;
  }

  callMe(s: String) {
    console.log(this.count, `SomeService instance id=${this.count}`, s);
  }
}

@Injectable()
export class EngineService {
  static counter : number = 0;
  public count: number;

  constructor() {
    this.count = ++SomeService.counter;
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
