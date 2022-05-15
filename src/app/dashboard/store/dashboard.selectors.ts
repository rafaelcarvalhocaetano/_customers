import { DASHBOARD_KEY } from './dashboard.types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

const select = createFeatureSelector<DashboardState>(DASHBOARD_KEY);

export const selectCustomer = createSelector(
  select,
  (state) => state.customers
);
