import { Customer } from './../models/customer';

export interface DashboardState {
  customers: Customer[];
}

export const initialStateDashboard: DashboardState = {
  customers: [],
};
