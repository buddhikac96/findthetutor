import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
