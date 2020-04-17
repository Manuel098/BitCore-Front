import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, from } from 'rxjs';
// import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io(Urls.baseURL);
  constructor() { }

  getData() {
    const observable = new Observable(observer => {
      this.socket.on('Subscribing');
    });
    return observable;
  }
}
