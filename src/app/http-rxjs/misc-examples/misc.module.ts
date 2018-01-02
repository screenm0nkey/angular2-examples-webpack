import { NgModule } from "@angular/core";
import { MiscHttpExamples } from "./main";
import { SharedModule } from "../../shared/shared.module";
import { CounterComponent } from "./rx-counter";
import { PromiseExample } from "./promise";
import { SubscribeExample } from "./subscribe";
import { NgRxStarterApp } from "./ngrx-starter";
import { AutoSearch } from "./automated-wiki-search";

@NgModule({
  imports: [SharedModule],
  declarations: [
    MiscHttpExamples,
    CounterComponent,
    PromiseExample,
    SubscribeExample,
    NgRxStarterApp,
    AutoSearch
  ]
})
export class MiscHttpModule {}

export { MiscHttpExamples };
