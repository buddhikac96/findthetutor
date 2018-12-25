import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.currentUser){
      if(this.authService.currentUser.user.role === "student"){
        this.router.navigate(['student']);
      }else{
        this.router.navigate(['tutor']);
      }
    }
  }

  loginView: string;
  userSelected: boolean = false;

  toggleUser(user){
    this.userSelected = !this.userSelected;
    this.loginView = user;
  }


}
