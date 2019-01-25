import {Injectable} from '@angular/core';

//private
@Injectable()
class _SmallService {
  run(): string {
    console.log('Small service...');
    return 'Small service...';
  }
}

//private
@Injectable()
class _LargeService {
  run(): string {
    console.log('Large service...');
    return 'Large service...';
  }
}

@Injectable({providedIn: 'root'})
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

@Injectable({providedIn: 'root'})
export class ApiService {
  run(): string {
    console.log('API Service...');
    return 'API service...';
  }
}

@Injectable({providedIn: 'root'})
export class MrTestyServiceOne {
  static counter: number = 0;

  constructor() {
    console.log(`%cCreated an instance of MrTestyServiceOne ${++MrTestyServiceOne.counter}`, 'color:deeppink');
  }
}

@Injectable({providedIn: 'root'})
export class MrTestyServiceTwo {
  static counter: number = 0;

  constructor() {
    console.log(`%cCreated an instance of MrTestyServiceTwo ${++MrTestyServiceTwo.counter}`, 'color:lime');
  }
}

// These services are used in the injectables.component.ts examples

@Injectable({providedIn: 'root'})
export class SomeService {
  static counter: number = 0;
  callMe(s: String) {
    console.log(
      `%cSomeService instance-id=${++SomeService.counter}`, 'color:green', s);
  }
}

@Injectable({providedIn: 'root'})
export class EngineService {
  static counter: number = 0;
  callMe(s: String) {
    console.log(`%cEngineService instance-id=${++SomeService.counter}`, 'color:orange', s);
  }
}

@Injectable({providedIn: 'root'})
export class ParamService {
  constructor(private phrase: string, num: number) {
    console.log('%cParamService is being created with phrase', 'color:violet', phrase, num);
  }
  getValue(): string {
    return this.phrase;
  }
}

@Injectable({providedIn: 'root'})
export class RubbishService {
  static counter: number = 0;
  imANumber: number = 11;
  imAString = 'hello';
  constructor() {
    console.log(`%cRubbishService instance-id=${++RubbishService.counter}`, 'color:yellow');
  }
}

@Injectable()
export class ConsoleWriter {
  public write(msg: string) {
    console.log(msg);
  }
}

export const loggerFactory = (writer: ConsoleWriter):LoggerService => {
  return new LoggerService(true, writer);
};
@Injectable()
export class LoggerService {
  constructor(private isEnabled: boolean, private writer: ConsoleWriter) {
  }
  log(msg: string) {
    if (this.isEnabled) {
      this.writer.write(msg);
    }
  }
}

export const bloggerFactory = (prefix):Function => {
  return () => new BloggerService(prefix);
};
@Injectable()
export class BloggerService {
  constructor(private prefix: string) {}
  log(msg: string) {
    console.log(`Logger (${this.prefix}): ${msg}`);
  }
}

export const someTokensFactory = (someTokens: string[]):string[] => {
  return someTokens.map(str => str.toUpperCase());
};

