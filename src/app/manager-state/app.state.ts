import { DashboardState } from '../dashboard/store/dashboard.state';
import { DASHBOARD_KEY } from '../dashboard/store/dashboard.types';

export interface AppState {
  [DASHBOARD_KEY]: DashboardState;
}
