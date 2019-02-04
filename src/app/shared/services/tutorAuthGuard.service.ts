import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class TutorAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  canActivate(){
    let role = this.authService.currentUser.user.role;
    if(this.authService.isLogged() && role == 'tutor') return true;

    this.toastr.warningToastr("You are not a tutor..!");

    this.router.navigate(['loginTutor']);
    return false;

  }
}