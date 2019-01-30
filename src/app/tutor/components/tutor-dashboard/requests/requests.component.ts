import { AuthService } from 'src/app/shared/services/auth.service';
import { TutorService } from './../../../shared/services/tutor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests = []

  constructor(
    private tutorService: TutorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let email = this.authService.currentUser.user.email;
    this.tutorService.getAllRequests(email)
      .subscribe(res=>{
        this.requests = res.json().request;
        console.log(res.json().request);
      })
  }


}
