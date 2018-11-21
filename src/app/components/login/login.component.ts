import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginView: string;
  userSelected: boolean = false;

  toggleUser(user){
    this.userSelected = !this.userSelected;
    this.loginView = user;
  }


}
