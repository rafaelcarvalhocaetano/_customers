import { NgModule } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { DashService } from './services/dash-service/dash.service';
import { LoginService } from './services/login-service/login.service';



@NgModule({
  imports: [
    AuthService,
    DashService,
    LoginService
  ],
  providers: [
    AuthService,
    DashService,
    LoginService
  ]
})
export class CoreModule { }
