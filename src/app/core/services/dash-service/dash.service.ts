import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { take, map, delay } from 'rxjs/operators';

import { Customer } from '../../models/customer';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashService {

  private uri = environment.api;
  public reLoader: boolean;
  private sendCustomers = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }


  public getCustomer() {
    return this.sendCustomers.asObservable();
  }

  public sendCustomer(param) {
    this.sendCustomers.next(param);
  }

  public findALlCustomer(): Observable<any> {
    return this.http.get<Customer[]>(this.uri);
  }

  public findById(id: string): Observable<any> {
    return this.http.get<Customer>(`${this.uri}/${id}`);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.uri}`, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.uri}`, customer);
  }

  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
