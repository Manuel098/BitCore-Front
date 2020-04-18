import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user = {};
  wallet = {};
  
  ngOnInit() {
    this.user = this.auth.getUser();
    this.wallet = this.auth.getWallet();
  }

  print(){
    console.log(this.user);
    console.log(this.wallet);
  }

}
