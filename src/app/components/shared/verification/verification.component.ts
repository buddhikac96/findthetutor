import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastrManager,
    private router: Router
  ) { }

  ngOnInit() {

  }

  pin;

  onSubmit() {
    console.log("verify called");
    let email = this.activatedRoute.snapshot.paramMap.get('email');
    let role = this.activatedRoute.snapshot.paramMap.get('role');

    let p = {
      'email': email,
      'role' : role,
      'token': this.pin
    }

    this.auth.verifyEmail(p)
      .subscribe(res=>{
        this.auth.verifyEmail(p)
          .subscribe(res=>{
            console.log(res.json());
            if(res.json().success){
              this.toastr.successToastr('Your accoutn verified');
              this.router.navigate(['loginStudent'])
            }else{
              this.toastr.errorToastr('Account verification failed');
            }
          })
      })
  }

}
