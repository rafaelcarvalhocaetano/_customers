import { DashboardReducer } from '../dashboard/store/dashboard.reducers';
import { DASHBOARD_KEY } from '../dashboard/store/dashboard.types';

export const AppReducer = {
  [DASHBOARD_KEY]: DashboardReducer,
};
