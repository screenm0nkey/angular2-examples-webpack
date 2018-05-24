import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHttpRxJs } from "./async.component";
import { HttpExamples } from "./searches/searches.module";
import { EchonestAppComponent } from "./echonest-app/echonest.module";
import { JohnLinquistExamples } from "./john-linquist/john.module";
import { MiscHttpExamples } from "./misc-examples/misc.module";
import {MainClocks} from "./ngrx-clock/ngrxclock.module";
import {NgRxInTenMinsComponent} from "./ngrx-in-ten/ngrxinten.module";
import {MainApp} from "./ngrx-queue/main";

const asyncRoutes: Routes = [
  {
    path: "",
    component: MainHttpRxJs,
    children: [
      {
        path: "",
        children: [
          { path: "", component: JohnLinquistExamples },
          { path: "http-examples", component: HttpExamples },
          { path: "echonest-app", component: EchonestAppComponent },
          { path: "misc-examples", component: MiscHttpExamples },
          {path: 'ngrx', component: MainClocks},
          {path: 'ngrx-in-ten', component: NgRxInTenMinsComponent},
          {path: 'ngrx-queue', component: MainApp},
          {
            path: "spotify",
            loadChildren: "./spotify/spotify.module#SpotifyModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(asyncRoutes)]
})
export class AsyncRoutingModule {}
