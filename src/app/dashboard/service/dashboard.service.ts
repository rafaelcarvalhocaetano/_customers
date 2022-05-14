import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, from, merge, Observable, of, combineLatest } from "rxjs";
import {
  combineAll,
  concatMap,
  filter,
  flatMap,
  map,
  mergeMap,
  switchAll,
  switchMap,
  take,
  tap,
  toArray,
} from "rxjs/operators";

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

  getAlbuns(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/albums?userId=1`).pipe(
      flatMap((albuns) =>
        forkJoin(
          albuns.map((albun) =>
            this.getPhotos(albun.id).pipe(
              map((d) => ({
                ...albun,
                photos: d,
              }))
            )
          )
        )
      )
    );
  }

  getPhotos(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/photos?albumId=${id}`);
  }
}
