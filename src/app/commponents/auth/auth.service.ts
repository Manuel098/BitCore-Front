import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { logging } from 'protractor';
import { Urls } from '../../urls';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private lastSecionTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // 'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbkBtYWlsLmNvbSIsInVzZXJJZCI6IjVlOTYyYmQxNjQ0NzJlNGIyYzBhNzA0NyIsImlhdCI6MTU4NzAwOTU5MywiZXhwIjoxNTg3MDEzMTkzfQ.fh7_eXJbwhr0sBgm_Sp_cVxbAwUrhctMCGgToikuf9k'
  // SIGN UP
  signUp(email: string, user: string, password: string) {
    this.http.post(Urls.baseURL + '/api/user/signUp', {
      user: user,
      email: email,
      password: password
    }).subscribe(response => {
      const token = response['token'];
      this.token = token;
      if (token) {
        const expiresInDuration = response['expiresIn'];
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response['user']['_id'];
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + expiresInDuration * 1000
        );
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/index']);
        console.log(this.isAuthenticated);
      }
    }, error => {
      alert('Usuario o contraseña invalido!!');
      this.authStatusListener.next(false);
    });
  }

  signIn(email: string, password: string) {
    const authData = { email: email, password: password };
    this.http
      .post<{token: string; expiresIn: number; user: Array<any>; monedero: Array<any>;}>(Urls.baseURL + '/api/user/signIn',
        authData
      )
      .subscribe(response => {
        console.log(response);
        const token = response['token'];
        this.token = token;
        if (token) {
          const expiresInDuration = response['expiresIn'];
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response['user']['_id'];
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, this.userId);
          this.router.navigate(['/']);
        }
      }, error => {
        alert('Usuario o contraseña invalido!!');
        this.authStatusListener.next(false);
      });
  }

  logout() {
    this.timeOut();
    this.userId = null;
    this.token = null;
    this.authStatusListener.next(false);
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private timeOut(){
    this.http.post(Urls.baseURL + '/users/logOut', {
      lastSession: this.lastSecionTimer,
      userId: this.userId
    });
  }
  // Auth Data
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }

}
