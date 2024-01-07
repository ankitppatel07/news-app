import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  subject = new Subject();

  constructor() { }

  getMsg() {
    return this.subject.asObservable()
  }

  sendMsg(msg) {
    //to send msg to an observable which are then sent to all 
    //angular components that are subscribers (a.k.a. observers) of that observable
    this.subject.next(msg) 
  }

}
