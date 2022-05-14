import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "prefix",
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dash.module").then((dash) => dash.DashModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((dash) => dash.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
