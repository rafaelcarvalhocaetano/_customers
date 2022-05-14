import { createAction, createReducer, on, props } from "@ngrx/store";

interface Action {
  type: string;
}

export interface State {
  customers: any[];
}

export const initialState: State = {
  customers: [],
};

export const customerStart = createAction("CTM");

export const customerReducer = createReducer(
  initialState,
  on(customerStart, (state) => ({ ...state }))
);
