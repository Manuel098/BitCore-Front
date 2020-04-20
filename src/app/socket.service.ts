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

  onSubscribing(user:any){
    this.socket.emit('Subscribing', user);
  }

  getData() {
    const observable = new Observable(observer => {
      // this.socket.on('Subscribing');
    });
    return observable;
  }
  onBuild(){
    const observable = new Observable<any>(observer => {
      this.socket.on('onCompra', (data) => {
        observer.next(data);
        return () => {
          this.socket.disconnect();
        };
      });
    });
    return observable;
  }
  onSell(){
    const observable = new Observable<any>(observer => {
      this.socket.on('onVenta', (data) => {
        observer.next(data);
        return () => {
          this.socket.disconnect();
        };
      });
    });
    return observable;
  }
  build(data){
    console.log(data);
    this.socket.emit('onCompra', data);
  }
  vent(data){
    console.log(data);
    this.socket.emit('onVenta', data);
  }
}
