import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ConsoleWriter {
    public write(msg: string) {
        console.log(`ConsoleWriter, ${msg}`);
    }
}

@Injectable({ providedIn: "root" })
export class LoggerExampleService {
    constructor(public writer: ConsoleWriter) { }

    log(msg: string) {
        this.writer.write(msg);
    }
}

const loggerFactory = (writer: ConsoleWriter): LoggerExampleService => {
    return new LoggerExampleService(writer);
};

export const loggerProvider = {
    provide: LoggerExampleService,
    useFactory: loggerFactory,
    deps: [ConsoleWriter]
};


