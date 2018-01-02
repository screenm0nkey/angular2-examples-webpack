import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormExamplesComponent } from "./forms.component";
import { FormOneComponent } from "./components/form-1";
import { FormTwoComponent } from "./components/form-2";
import { FormThreeComponent } from "./components/form-3";
import { FormFourComponent } from "./components/form-4";
import { FormFiveComponent } from "./components/form-5";
import { FormSixComponent } from "./components/form-6";
import { FormSevenComponent } from "./components/custom-validator-directives/form-7.module";
import { FormEightComponent } from "./components/dynamic/form-8.module";
import { FormNineComponent } from "./components/form-9";
import { FormTenComponent } from "./components/custom-form-controls/form-10.module";

const formsRoutes: Routes = [
  {
    path: "",
    component: FormExamplesComponent,
    children: [
      {
        path: "",
        children: [
          { path: "", component: FormOneComponent },
          { path: "form-two", component: FormTwoComponent },
          { path: "form-three", component: FormThreeComponent },
          { path: "form-four", component: FormFourComponent },
          { path: "form-five", component: FormFiveComponent },
          { path: "form-six", component: FormSixComponent },
          { path: "form-seven", component: FormSevenComponent },
          { path: "form-eight", component: FormEightComponent },
          { path: "form-nine", component: FormNineComponent },
          { path: "form-ten", component: FormTenComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class FormsRoutingModule {}
