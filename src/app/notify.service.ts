import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";

// Service that handles communication between components in different hierarchy
@Injectable()
export class NotifyService {

  private notify = new Subject<any>();

  constructor(){}

  public notifyOtherComponent(data: any) {
    this.notify.next(data);
  }

  // We need to convert this Subject into an observable 
  // in order to allow components to subscribe to it
  getNotifyObservable() : Observable<any> {
    return this.notify.asObservable();
  }
}
