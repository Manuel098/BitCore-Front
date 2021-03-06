import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  displayedColumns: string[] = ['date', 'cant'];
  dataSource;
  wallet = [];
  constructor(private auth:AuthService, private socket:SocketService) {
    this.socket.onBuild().subscribe(res => {
      this.auth.pushInWallet('compra',[res['cant'],res['date']]);
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.dataSource=[];
    this.wallet = this.auth.getWallet()['history'][0]['compra'];
    this.wallet.forEach(element => {
      this.dataSource.push({date:element[1], cant:element[0]});
    });
  }
}
