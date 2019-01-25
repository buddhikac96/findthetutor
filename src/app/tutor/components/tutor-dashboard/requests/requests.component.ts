import { AuthService } from 'src/app/shared/services/auth.service';
import { TutorService } from './../../../shared/services/tutor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  constructor(
    private tutorService: TutorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let email = this.authService.currentUser.user.email;
    console.log(email);
    console.log("requests");
    this.tutorService.getAllRequests(email)
      .subscribe(res=>{
        console.log(res.json());
        console.log("requests");
      })
  }

  requests = []

}
