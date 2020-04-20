import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  displayedColumns: string[] = ['date', 'cant'];
  dataSource;
  wallet = [];
  constructor(private auth:AuthService, private socket:SocketService) {
    this.socket.onSell().subscribe(res => {
      this.auth.pushInWallet('venta',[res['cant'],res['date']]);
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.dataSource=[];
    this.wallet = this.auth.getWallet()['history'][0]['venta'];
    this.wallet.forEach(element => {
      this.dataSource.push({date:element[1], cant:element[0]});
    });
  }
}
