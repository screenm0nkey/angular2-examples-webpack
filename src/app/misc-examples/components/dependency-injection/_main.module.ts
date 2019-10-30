import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {DepInjectionComponent} from './dependency.component';
import {ModulesComponent} from './modules.component';
import {InjectComponent} from './injectables.component';
import {DiSampleComponent} from './resolve-create-service.component';
import {
  ApiService,
  bloggerFactory,
  BloggerService,
  ParamService,
  RubbishService,
  ViewPortService
} from './injectables.service';
import {DiSampleComponent2} from './resolve-create-factory.component';
import {InjectParentComponent, InjectParentInChildComponent} from './inject-parent-component';
import {PipesComponent} from './pipes.component';
import {ParentPersonComponent, PersonComponent} from "./control-lookup.component";

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
    PipesComponent,
    PersonComponent,
    ParentPersonComponent
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
    // https://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
    // https://egghead.io/lessons/angular-define-an-aliased-class-provider-in-angular
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService',
      useFactory: (viewport: ViewPortService) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    },
    {
      provide: BloggerService,
      useFactory: bloggerFactory('AppModule')
    }
  ]
})
export class DependencyModule {
}

export {DepInjectionComponent};
