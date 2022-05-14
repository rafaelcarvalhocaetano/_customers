import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashComponent } from "./dash.component";
import { SharedModule } from "../shared/shared.module";
import { DashService } from "./service/dash.service";

const routes: Routes = [
  {
    path: "",
    component: DashComponent,
  },
];

@NgModule({
  declarations: [DashComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [DashService],
})
export class DashModule {}
