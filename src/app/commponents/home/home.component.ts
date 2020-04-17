import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../socket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selection='';
  username : string='';
  password : string='';
  email : string='';
  constructor(private sock: SocketService) { }

  ngOnInit() {
    // this.sock.getData();
  }

}
