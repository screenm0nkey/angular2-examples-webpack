import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth.routes.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./components/LoginComponent";
import { HomeComponent } from "./components/HomeComponent";
import { AboutComponent } from "./components/AboutComponent";
import { ContactComponent } from "./components/ContactComponent";
import { ProtectedComponent } from "./components/ProtectedComponent";
import { AuthAppComponent } from "./auth.component";
import { AUTH_PROVIDERS } from "./services/AuthService";
import { DialogService } from "./services/dialog.service";

@NgModule({
  imports: [AuthRoutingModule, SharedModule],
  declarations: [
    AuthAppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProtectedComponent,
    LoginComponent
  ],
  providers: [AUTH_PROVIDERS, DialogService]
})
export class AuthAppModule {}
