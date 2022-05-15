import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  customerStart,
  customerSuccess,
  customerFailure,
} from './dashboard.actions';
import { DashboardService } from '../service/dashboard.service';
import { Store } from '@ngrx/store';

@Injectable()
export class DashboardEffects {
  dashboard$ = createEffect(
    () =>
      this._action.pipe(
        ofType(customerStart),
        exhaustMap(() =>
          this._service.getCustomer().pipe(
            tap((customers) =>
              this._store.dispatch(customerSuccess({ customers }))
            ),
            catchError((e) => {
              // snackbar de erro
              this._store.dispatch(customerFailure());
              return e;
            })
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _action: Actions,
    private readonly _service: DashboardService,
    private readonly _store: Store
  ) {}
}
