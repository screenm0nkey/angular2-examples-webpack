import { Pipe } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "fromNow"
})
export class FromNowPipe {
  transform(value: any, args: Array<any>): string {
    return moment(value).fromNow();
  }
}

export const fromNowPipeInjectables: Array<any> = [FromNowPipe];
