import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  isLogged: boolean = false;

  private onlineOffline: boolean = navigator.onLine;

  constructor(private auth: AuthService){
    if(localStorage.getItem('token')){
      this.isLogged = true;
    }
  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.isLogged = true;
    }
    console.log(this.onlineOffline);
  }
}
