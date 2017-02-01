import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {DepInjectionApp} from "./dependency-injection";
import {InjectComponent} from "./injecting-token";
import {DiSampleApp} from "./injecting-token-manually";
import {ParamService, RubbishService} from "./some-service";
import {ApiService} from "./services/ApiService";
import {ViewPortService} from "./services/ViewPortService";
import {DiSampleApp2} from "./resolve-create";

// if we provide services in the module they will be globally avaialble
// as all modules use the root injector. so we declare
// http://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
// http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
@NgModule({
  imports: [SharedModule],
  declarations: [
    DepInjectionApp,
    InjectComponent,
    DiSampleApp,
    DiSampleApp2
  ],
  providers: [
    RubbishService,
    //If we need to pass in parameters when creating a service, we would need to use a factory.
    {
      provide: ParamService,
      useFactory: (rs): ParamService => new ParamService('YOLO', rs.imANumber),
      deps: [RubbishService]
    },
    ApiService,
    ViewPortService,
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService',
      useFactory: (viewport: any) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }
  ]
})
export class DIModule {
}

export {DepInjectionApp}
