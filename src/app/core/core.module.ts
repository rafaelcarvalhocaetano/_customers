import { NgModule } from "@angular/core";

import { AuthService } from "./services/auth-service/auth.service";
import { LoginService } from "./services/login-service/login.service";

@NgModule({
  imports: [AuthService, LoginService],
  providers: [AuthService, LoginService],
})
export class CoreModule {}
