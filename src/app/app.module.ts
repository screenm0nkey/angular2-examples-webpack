import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { PageNotFoundComponent } from "./not-found.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
// this is for the angular2 services example
import {
  EngineService,
  SomeService
} from "./misc-examples/components/dependency-injection/services/some-service";
import { EggheadExamplesModule } from "./egghead-example/egghead.module";
import { ComposeMessageComponent } from "./auth/components/compose-message.component";
import { ChatAppModule } from "./chat-app/ts/app.module";
import { ChatAppReduxModule } from "./chat-app-redux/ts/app.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  // modules only need to be imported if they are not lazy loaded
  imports: [
    BrowserModule,
    AppRoutingModule,
    EggheadExamplesModule,
    ChatAppModule,
    ChatAppReduxModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" }, //is the equivalent of using <base href="/">
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    // loading dependencies example
    SomeService, // this is shorthand for provide(SomeService, {useClass : SomeService}),
    { provide: "whateverToken", useClass: SomeService }, // this is used by "injecting-token.ts" component,
    // this factory creates a new instance each time
    { provide: "EngineService",
      useFactory: () => {
        // this is used by "injecting-token.ts" component,
        return () => {
          return new EngineService();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
