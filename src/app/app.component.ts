import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @BlockUI() blockUI: NgBlockUI;
  title = 'app';
  isLogged: boolean = false;

  private onlineOffline: boolean = navigator.onLine;

  constructor(private auth: AuthService){

    if(!this.onlineOffline){
      this.blockUI.start('Please check your internet service');
    }else{
      this.blockUI.stop();
    }

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
