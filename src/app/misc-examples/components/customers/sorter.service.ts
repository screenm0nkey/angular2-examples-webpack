//Based on https://github.com/thelgevold/angular-2-samples/blob/master/components/grid/sorter
import {Injectable} from 'angular2/core';
@Injectable()
export class Sorter {
    property:string = null;
    direction:number = 1;

    constructor() {
    }

    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;

        collection.sort((a, b) => {
            a=a[prop];
            b=b[prop];
            if (Object.prototype.toString.call(a).slice(8,-1) === 'String') {
                a = a.toLowerCase();
            }
            if (Object.prototype.toString.call(b).slice(8,-1) === 'String') {
                b = b.toLowerCase();
            }
            if (a === b) {
                return 0;
            }
            else if (a > b) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
}