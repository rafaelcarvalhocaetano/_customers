import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, from, merge, Observable, of } from "rxjs";
import { combineAll, map, mergeMap, switchMap, tap } from "rxjs/operators";

import { Customer } from "../models/customer";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private uri = environment.api;
  public reLoader: boolean;
  private URL = "https://jsonplaceholder.typicode.com";

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

  public getAlbuns(): Observable<any[]> {
    return forkJoin([
      this.http.get<any[]>(`${this.URL}/albums`),
      this.http.get<any[]>(`${this.URL}/photos`),
    ]).pipe(
      map((collections) =>
        collections[0].map((q) => ({
          ...q,
          photos: collections[1].filter((a) => q.id === a.albumId),
        }))
      )
    );
  }
}
