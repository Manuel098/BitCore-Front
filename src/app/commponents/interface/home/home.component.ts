import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Globals } from '../../../globale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private authListenerSubs: Subscription;
  authStat: boolean = false;
  bitcoinData;
  selection='';

  constructor(private auth:AuthService, private global:Globals) { }

  ngOnInit() {
    this.bitcoinData={
      'market_price_usd':'',
      'totalbc':'',
      'n_blocks_total':'',
      'estimated_transaction_volume_usd':'',
      'trade_volume_btc':'',
      'trade_volume_usd':'',
      'total_btc_sent':'',
    };
    this.authStat = this.auth.getIsAuth();
    this.authListenerSubs = this.auth.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.authStat = isAuthenticated;
    });
    this.global.bitcoinStatus().then(res => {
      this.bitcoinData = res;
      console.log(this.bitcoinData);
    });
    // this.sock.getData();
  }

}
