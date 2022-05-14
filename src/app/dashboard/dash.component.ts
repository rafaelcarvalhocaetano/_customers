import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CardOptions } from "./models/card";
import { Customer } from "./models/customer";

@Component({
  selector: "ctm-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.scss"],
})
export class DashComponent implements OnInit {
  public openModal = false;
  public loader = true;
  public actions: CardOptions;
  public cards: Customer[] = [];

  public cards$: Observable<Customer[]>;

  constructor() {}

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
    // this.cards$ = this._service.getCustomer();
    // this.cards$ = this.store.select(selectCustomers);
    // this.store.select(selectCustomers).subscribe((x) => {
    //   console.log("🚀 ~ x", x);
    // });
    this.loader = false;
  }

  public onAction(value: string): void {
    if (value === "create") {
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
