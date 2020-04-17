import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {Subscription} from 'rxjs';
import { SignInComponent } from './commponents/auth/sign-in/sign-in.component';
import { SignUpComponent } from './commponents/auth/sign-up/sign-up.component'
import { AuthService } from './commponents/auth/auth.service';

export interface SignUpData {
  username: string;
  password: string;
  email: string;
}
export interface SignInData {
  password: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  opened: boolean = false;
  title = 'BitCore';
  auth: boolean = false;

  private authListenerSubs: Subscription;
  constructor(private authSrv: AuthService, public signUpDialog: MatDialog, public signInDialog: MatDialog, private router: Router) { 
  }
  
  ngOnInit() {
    console.log(this.authSrv.getIsAuth);
    this.auth = this.authSrv.getIsAuth();

    this.authListenerSubs = this.authSrv.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.auth = isAuthenticated;
      });
  }

  onDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  route(string){
    this.router.navigateByUrl('/'+string);
  }
  signIn(){
    const dialogRef = this.signInDialog.open(SignInComponent, {
      width: '65%',
      data: {password: '', email: ''}
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if(result['email']!=''&&result['password']!=''){
          console.log(result);
          await this.authSrv.signIn(result['email'], result['password']);
          // this.ngOnInit();
        }
      }
    });
  }
  signUp(){
    const dialogRef = this.signUpDialog.open(SignUpComponent, {
      width: '65%',
      data: {username: '', email: ''}
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        console.log(result);
        await result['password1']==result['password2']?this.authSrv.signUp(result['email'], result['username'], result['password1']):alert('Las contraseñas no coinciden');
        // this.ngOnInit();
      }
    });
  }
  logOut(){
    this.authSrv.logout();
  }
}
