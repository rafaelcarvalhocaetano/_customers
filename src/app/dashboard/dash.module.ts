import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardService } from './service/dashboard.service';
import { DashboardReducer } from './store/dashboard.reducers';
import { DashboardEffects } from './store/dashboard.effects';
import { DASHBOARD_KEY } from './store/dashboard.types';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
  },
];

@NgModule({
  declarations: [DashComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature(DASHBOARD_KEY, DashboardReducer),
  ],
  providers: [DashboardService],
})
export class DashModule {}
