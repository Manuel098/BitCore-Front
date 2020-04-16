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
  
  public get getToken(): string { return this.token; }
  public get getUserId(): string { return this.userId; }
  public get getIsAuth(): boolean { return this.isAuthenticated; }
  public get getAuthStatusListener() { return this.authStatusListener.asObservable(); }

  // 'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbkBtYWlsLmNvbSIsInVzZXJJZCI6IjVlOTYyYmQxNjQ0NzJlNGIyYzBhNzA0NyIsImlhdCI6MTU4NzAwOTU5MywiZXhwIjoxNTg3MDEzMTkzfQ.fh7_eXJbwhr0sBgm_Sp_cVxbAwUrhctMCGgToikuf9k'
  // SIGN UP
  signUp(email: string, user: string, password: string) {
    this.http.post(Urls.baseURL + '/user', {
      user: user,
      email: email,
      password: password
    }).subscribe(response => {
      const token = response['token'];
      if(token){
        const expiresInDuration = response['expiresIn'];
        console.log(token);
      }
      this.router.navigate(['/profile']);
    });
  }

}
