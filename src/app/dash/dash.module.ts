import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from '../side-menu/side-menu.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashModule { }
