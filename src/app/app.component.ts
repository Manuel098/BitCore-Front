import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  title = 'BitCore';

  constructor(private router: Router) { 
  }

  route(string){
    this.router.navigateByUrl('/'+string);
  }
  signIn(){

  }
  signUp(){
    
  }
}
