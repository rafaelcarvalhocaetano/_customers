import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer';
import { DashboardType } from './dashboard.types';

export const customerStart = createAction(DashboardType.DASHBOARD_START);
export const customerSuccess = createAction(
  DashboardType.DASHBOARD_SUCCESS,
  props<{ customers: Customer[] }>()
);
export const customerFailure = createAction(DashboardType.DASHBOARD_FAILURE);
