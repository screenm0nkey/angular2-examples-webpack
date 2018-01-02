import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {DepInjectionApp} from "./main";
import {InjectComponent} from "./injecting-token";
import {DiSampleApp} from "./resolve-create-service";
import {ParamService, RubbishService} from "./services/some-service";
import {ApiService, ViewPortService} from "./services/more-services";
import {DiSampleApp2} from "./resolve-create-factory";
import {InjectChildComponent, InjectParentComponent} from "./inject-parent-component";

// if we provide services in the module they will be globally available
// as all modules use the root injector.
// http://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
// http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
@NgModule({
  imports: [SharedModule],
  declarations: [
    DepInjectionApp,
    InjectComponent,
    DiSampleApp,
    DiSampleApp2,
    InjectParentComponent,
    InjectChildComponent
  ],
  providers: [
    RubbishService,
    //If we need to pass in parameters when creating a service, we would need to use a factory.
    {
      provide: ParamService,
      useFactory: (rs): ParamService => new ParamService("YOLO", rs.imANumber),
      deps: [RubbishService]
    },
    ApiService,
    ViewPortService,
    // useExisting https://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
    {provide: "ApiServiceAlias", useExisting: ApiService},
    {
      provide: "SizeService",
      useFactory: (viewport: ViewPortService) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }
  ]
})
export class DIModule {
}

export {DepInjectionApp};
