import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  logOut(){
    console.log(this.authService.currentUser.user.name);
    this.authService.logOut();
  }

}
