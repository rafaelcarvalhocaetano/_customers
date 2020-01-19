import { Component, OnInit } from '@angular/core';
import { CardOptions } from '../core/models/card';

import { Customer } from '../core/models/customer';
import { DashService } from '../core/services/dash-service/dash.service';

@Component({
  selector: 'ctm-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  public openEditCard = false;
  public loader = false;
  public actions: CardOptions;
  public cards: Customer[] = [];
  public id: string;

  constructor(
    private service: DashService
  ) {  }

  ngOnInit(): void {
    this.listCustomers();
  }

  public clickEvent(data) {
    if (data.type === 1) {
      this.openEditCard = true;
      this.id = data.id;
    }
    if (data.type === 2) {
      this.loader = true;
      this.service.deleteCustomer(data.id).subscribe(() => {
        this.listCustomers();
        this.loader = false;
      });
    }
  }

  private listCustomers() {
    this.loader = true;
    this.service.findALlCustomer().subscribe(x => {
      this.cards = x;
    }, () => this.loader = false, () => this.loader = false);
    this.service.getCustomer().subscribe(resp => {
      this.cards = resp;
    }, () => this.loader = false, () => this.loader = false);
  }

}
