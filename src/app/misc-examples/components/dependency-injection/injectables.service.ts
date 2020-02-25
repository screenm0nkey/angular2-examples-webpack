import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
class _SmallService {
  run(): string {
    console.log("Small service...");
    return "Small service...";
  }
}

@Injectable({ providedIn: "root" })
class _LargeService {
  run(): string {
    console.log("Large service...");
    return "Large service...";
  }
}

@Injectable({ providedIn: "root" })
export class ViewPortService {
  determineService(): _SmallService | _LargeService {
    let w: number = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (w < 800) {
      return new _SmallService();
    }
    return new _LargeService();
  }
}

@Injectable({ providedIn: "root" })
export class ApiService {
  run(): string {
    console.log("API Service...");
    return "API service...";
  }
}

@Injectable({ providedIn: "root" })
export class MrTestyServiceOne {
  static counter: number = 0;

  constructor() {
    console.log(
      `%cCreated an instance of MrTestyServiceOne ${++MrTestyServiceOne.counter}`,
      "color:deeppink"
    );
  }
}

@Injectable({ providedIn: "root" })
export class MrTestyServiceTwo {
  static counter: number = 0;

  constructor() {
    console.log(
      `%cCreated an instance of MrTestyServiceTwo ${++MrTestyServiceTwo.counter}`,
      "color:lime"
    );
  }
}

export class ParamService {
  constructor(public phrase: string, num: number) {
    console.log("%cParamService is being created with phrase","color:violet",phrase,num);
  }

  getValue(): string {
    return this.phrase;
  }
}

@Injectable({ providedIn: "root" })
export class RubbishService {
  static counter: number = 0;
  imANumber: number = 11;
  imAString = "hello";

  constructor() {
    console.log(`%cRubbishService instance-id=${++RubbishService.counter}`,"color:yellow");
  }
}
