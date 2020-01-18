import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  public sendOC: Subject<any>;

  constructor() { }

  public getActions(flag: boolean) {
    this.sendOC.next(flag);
  }
}
