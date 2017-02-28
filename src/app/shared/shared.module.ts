import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/*
 FormsModule gives us template driven directives such as:
 • ngModel and
 • NgForm
 Whereas ReactiveFormsModule gives us directives like
 • formControl and
 • ngFormGroup
 */
import {MrTestyServiceOne, MrTestyServiceTwo} from "../misc-examples/components/dependency-injection/services/more-services";

@NgModule({
  // Notice that we have only exported it without adding it to declarations or imports.
  // This would happen in the case where the component is not used internally inside the module
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule, JsonpModule],
  // this provider will be available app wide and will instantaited more than once
  // if used on a lazy-loaded module. look at console for "Created an instance of MrTestyServiceTwo 1"
  providers: [MrTestyServiceTwo]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // this provider will be available app wide but will only be instantiated once
      // look at the console for "Created an instance of MrTestyServiceOne 1"
      providers: [MrTestyServiceOne]
    };
  }
}



