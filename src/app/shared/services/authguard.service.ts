import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  canActivate(){
    if(this.authService.isLogged()) return true;

    this.toastr.warningToastr('Please login to the eTutor');
    this.router.navigate(['login']);
    return false;
  }
}