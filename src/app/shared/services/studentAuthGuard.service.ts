import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  canActivate(){
    let role = this.authService.currentUser.user.role;
    if(this.authService.isLogged() && role == 'student') return true;

    this.toastr.warningToastr("You are not a student..!");

    this.router.navigate(['loginStudent']);
    return false;

  }
}