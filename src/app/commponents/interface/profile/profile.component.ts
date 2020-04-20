import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SocketService } from '../../../socket.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BuildSellComponent } from '../../modals/build-sell/build-sell.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public signInDialog: MatDialog, private auth:AuthService, private sock:SocketService) { }
  user = {};
  wallet = {};
  // private transaccion: Subscription;
  
  ngOnInit() {
    this.user = this.auth.getUser();
    this.wallet = this.auth.getWallet();
  }

  print(){
    console.log(this.user);
    console.log(this.wallet);
  }

  openModal(){
    const dialogRef = this.signInDialog.open(BuildSellComponent, {
      width: '65%',
      data: {nTrans: '', canti: ''}
    });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        if (result['canti']>0) {
          console.log(result);
          if(result['nTrans']=='Venta'){
            this.sock.vent({id:this.wallet['id'], cant:result['canti']});
          }else if(result['nTrans']=='Compra'){
            this.sock.build({id:this.wallet['id'], cant:result['canti']});
          }else{
            alert('No selecciono un tipo de transacción');
          }
        }else{
          alert('La cantidad no es valida');
        }
      }
    });
  }

}
