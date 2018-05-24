import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHttpRxJs } from "./async.component";
import { JohnLinquistExamples } from "./john-linquist/john.module";

const asyncRoutes: Routes = [
  {
    path: "",
    component: MainHttpRxJs,
    children: [
      {
        path: "",
        children: [
          { path: "", component: JohnLinquistExamples },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(asyncRoutes)]
})
export class AsyncRoutingModule {}
