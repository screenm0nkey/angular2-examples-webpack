import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class EngineService {
    static counter: number = 0;
    engineLog(s?: String) {
        console.log(`%cEngineService factory instance-id=${++EngineService.counter}`, "color:orange", s);
    }
}

const engineFactory = (): EngineService => {
    return new EngineService();
};

export const engineProvider = {
    provide: 'EngineServiceToken',
    useFactory: engineFactory
};
