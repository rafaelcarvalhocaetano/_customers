import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Customer } from "../../core/models/customer";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private uri = environment.api;
  public reLoader: boolean;

  constructor(private http: HttpClient) {}

  public getCustomer(): Observable<any> {
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
