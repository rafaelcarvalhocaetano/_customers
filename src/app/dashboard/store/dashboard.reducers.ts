import { Action, createReducer, on } from '@ngrx/store';
import * as IAction from './dashboard.actions';
import { initialStateDashboard } from './dashboard.state';

const _reducer = createReducer(
  initialStateDashboard,
  on(IAction.customerStart, (state) => ({ ...state })),
  on(IAction.customerSuccess, (state, action) => {
    console.log(action.type);
    console.log(action.customers);

    return {
      ...state,
      customers: action.customers,
    };
  }),
  on(IAction.customerFailure, (state) => ({
    ...state,
    loader: false,
  }))
);

export function DashboardReducer(state, action: Action) {
  return _reducer(state, action);
}
