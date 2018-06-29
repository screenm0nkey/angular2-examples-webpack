import {Injectable} from "@angular/core";

// These services are used in the injecting-token.ts examples

@Injectable()
export class SomeService {
  static counter: number = 0;

  callMe(s: String) {
    console.log(
      `%cSomeService instance-id=${++SomeService.counter}`, "color:green", s);
  }
}

@Injectable()
export class EngineService {
  static counter: number = 0;

  callMe(s: String) {
    console.log(`%cEngineService instance-id=${++SomeService.counter}`, "color:orange", s);
  }
}

@Injectable()
export class ParamService {
  constructor(private phrase: string, num: number) {
    console.log(
      "%cParamService is being created with phrase",
      "color:violet",
      phrase,
      num
    );
  }

  getValue(): string {
    return this.phrase;
  }
}

@Injectable()
export class RubbishService {
  static counter: number = 0;
  imANumber: number = 11;
  imAString  = "hello";

  constructor() {
    console.log(`%cRubbishService instance-id=${++RubbishService.counter}`, "color:yellow");
  }
}
