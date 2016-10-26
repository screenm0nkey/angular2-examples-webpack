import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {DepInjectionApp} from './dependency-injection';
import {InjectComponent} from './injecting-token';

// if we provide services in the module they will be globally avaialble
// as all modules use the root injector. so we declare
// http://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
// http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
@NgModule({
  imports: [SharedModule],
  declarations: [
    DepInjectionApp,
    InjectComponent
  ]
})
export class DIModule {
}

export {DepInjectionApp}
