import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
// import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io('wss://ws.blockchain.info/inv');
  constructor() { }

  joinRoom(data) {
    console.log(data);
    // TRANSACTIONS
    // {"op":"unconfirmed_sub"}
    // {"op":"unconfirmed_unsub"}
    this.socket.emit('op', data);
  }
}
