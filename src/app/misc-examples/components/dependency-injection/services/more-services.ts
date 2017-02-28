import {Injectable} from "@angular/core";

@Injectable()
export class SmallService {
  run(): void {
    console.log('Small service...');
  }
}

@Injectable()
export class LargeService {
  run(): void {
    console.log('Large service...');
  }
}

@Injectable()
export class ApiService {
  get(): void {
    console.log('Getting resource...');
  }
}

@Injectable()
export class ViewPortService {
  determineService(): any {
    let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}
@Injectable()
export class MrTestyServiceOne {
  static counter : number = 0;
  constructor() {
    console.log(1111, `Created an instance of MrTestyServiceOne ${++MrTestyServiceOne.counter}`);
  }
}
@Injectable()
export class MrTestyServiceTwo {
  static counter : number = 0;
  constructor() {
    console.log(2222, `Created an instance of MrTestyServiceTwo ${++MrTestyServiceTwo.counter}`);
  }
}

