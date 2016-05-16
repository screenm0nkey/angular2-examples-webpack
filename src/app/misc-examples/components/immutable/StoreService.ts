import {Injectable} from '@angular/core'

export class Todo {
    constructor(public someval:string = ""){}
}
/*
 * Registering the provider at the app level creates the injected dependency as a singleton
 * for the entire application, but providers at the component level result in new instances
 * at the component level.
 * */
@Injectable()
export class Store {
    todos:Array<Todo> = [{someval:'hellyeah'}];
}