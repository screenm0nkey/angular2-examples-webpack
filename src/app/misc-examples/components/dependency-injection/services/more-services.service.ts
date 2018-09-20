import {Injectable} from '@angular/core';

@Injectable()
export class SmallService {
  run(): string {
    console.log('Small service...');
    return 'Small service...';
  }
}

@Injectable()
export class LargeService {
  run(): string {
    console.log('Large service...');
    return 'Large service...';
  }
}

@Injectable()
export class ApiService {
  run(): string {
    console.log('API Service...');
    return 'API service...';
  }
}

@Injectable()
export class ViewPortService {
  determineService(): SmallService | LargeService {
    let w: number = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (w < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}

@Injectable()
export class MrTestyServiceOne {
  static counter: number = 0;
  constructor() {
    console.log(`%cCreated an instance of MrTestyServiceOne ${++MrTestyServiceOne.counter}`, 'color:deeppink');
  }
}

@Injectable()
export class MrTestyServiceTwo {
  static counter: number = 0;
  constructor() {
    console.log(`%cCreated an instance of MrTestyServiceTwo ${++MrTestyServiceTwo.counter}`, 'color:lime');
  }
}
