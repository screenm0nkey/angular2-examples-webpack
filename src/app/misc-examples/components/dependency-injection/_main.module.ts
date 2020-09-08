import { NgModule } from "@angular/core";
import { ModulesComponent } from "./modules.component";
import {
  ApiService,
  RubbishService,
  ParamService,
  ViewPortService
} from "./injectables.service";
import { ManuallyCreateFactoryComponent } from "./factory-examples/manually-create-factory.component";
import {
  InjectParentComponent,
  InjectParentInChildComponent
} from "./inject-parent-component";
import { PipesComponent } from "./pipes.component";
import {
  ParentPersonComponent,
  PersonComponent
} from "./control-lookup.component";
import { DepInjectionComponent } from "./_main.component";
import { TokenExamplesComponent } from "./token-examples.component";
import { FactoryExamplesComponent } from "./factory-examples/factory-examples.component";
import { ManualInjectionExamplesComponent } from "./manual-injection.component";
import { SharedModule } from 'src/app/shared/_shared.module';
import { ManuallyInjectComponent } from './manually-inject-service.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    DepInjectionComponent,
    TokenExamplesComponent,
    ManuallyInjectComponent,
    ManuallyCreateFactoryComponent,
    InjectParentComponent,
    InjectParentInChildComponent,
    ModulesComponent,
    PipesComponent,
    PersonComponent,
    ParentPersonComponent,
    FactoryExamplesComponent,
    ManualInjectionExamplesComponent
  ],
  // https://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html
  // https://egghead.io/lessons/angular-define-an-aliased-class-provider-in-angular
  // http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
  providers: [
    RubbishService,
    ApiService,
    ViewPortService,
    // If we need to pass in parameters when creating a service, we would need to use a factory.
    {
      provide: ParamService,
      useFactory: (rs): ParamService => new ParamService("YOLO", rs.imANumber),
      deps: [RubbishService]
    },

    { provide: "ApiServiceAlias", useExisting: ApiService },
    {
      provide: "SizeService",
      useFactory: (viewport: ViewPortService) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }
  ]
})
export class DependencyModule { }

export { DepInjectionComponent };
