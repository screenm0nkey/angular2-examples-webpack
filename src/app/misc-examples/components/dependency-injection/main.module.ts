import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {DepInjectionComponent} from './main';
import {ModulesComponent} from './modules';
import {InjectComponent} from './injecting-token';
import {DiSampleComponent} from './resolve-create-service';
import {ParamService, RubbishService} from './services/some-service';
import {ApiService, ViewPortService} from './services/more-services.service';
import {DiSampleComponent2} from './resolve-create-factory';
import {InjectParentInChildComponent, InjectParentComponent} from './inject-parent-component';
import {PipesComponent} from './pipes.component';

// if we provide services in the module they will be globally available as all modules use the root injector.
// http://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
// http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
@NgModule({
  imports: [SharedModule],
  declarations: [
    DepInjectionComponent,
    InjectComponent,
    DiSampleComponent,
    DiSampleComponent2,
    InjectParentComponent,
    InjectParentInChildComponent,
    ModulesComponent,
    PipesComponent
  ],
  providers: [
    RubbishService,
    // If we need to pass in parameters when creating a service, we would need to use a factory.
    {
      provide: ParamService,
      useFactory: (rs): ParamService => new ParamService('YOLO', rs.imANumber),
      deps: [RubbishService]
    },
    ApiService,
    ViewPortService,
    // useExisting https://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService',
      useFactory: (viewport: ViewPortService) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }
  ]
})
export class DIModule {
}

export {DepInjectionComponent};
