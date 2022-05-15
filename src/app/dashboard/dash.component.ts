import { customerStart } from './store/dashboard.actions';
import { selectCustomer } from './store/dashboard.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../manager-state/app.state';
import { CardOptions } from './models/card';
import { Customer } from './models/customer';

@Component({
  selector: 'ctm-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  public openModal = false;
  public loader = true;
  public actions: CardOptions;
  public cards: Customer[] = [];

  public cards$: Observable<Customer[]>;

  constructor(private readonly _store: Store<AppState>) {}

  ngOnInit(): void {
    // this._service.getAlbuns().subscribe((resp) => {
    //   console.log(resp);
    // });
    this.listCustomers();
  }

  public clickEvent(data) {
    if (data.type === 1) {
      this.openModal = true;
    }
    if (data.type === 2) {
      this.loader = true;
      // this._service.deleteCustomer(data.id).subscribe(() => {
      //   this.listCustomers();
      //   this.loader = false;
      // });
    }
  }

  private listCustomers() {
    this._store.dispatch(customerStart());
    this.cards$ = this._store.select(selectCustomer);
    this.loader = false;
  }

  public onAction(value: string): void {
    if (value === 'create') {
      this.openModal = true;
    }
  }

  public receiveValue(data) {
    this.openModal = data.status;
    console.log({ v: data.value });
    this.createCustomer(data.value);
  }

  private createCustomer(data): void {
    // this._service.createCustomer(data);
  }
}
