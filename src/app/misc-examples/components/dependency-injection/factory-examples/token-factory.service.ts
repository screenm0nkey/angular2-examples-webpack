import { InjectionToken } from "@angular/core";


const jeffFactory = (someTokens: string[]): string[] => {
    return someTokens.map(str => str.toUpperCase());
};

export const JEFF_TOKEN = new InjectionToken<string>("ThisCanBeCalledAnythingJeffToken");

export const jeffProvider = {
    provide: "jeffFactory",
    useFactory: jeffFactory,
    deps: [JEFF_TOKEN]
}; 