import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {routes} from './app.routes';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})
export class SeedApp {
  constructor() {}
}
export default routes;
