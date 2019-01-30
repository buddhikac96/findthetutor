import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @Input() requestObject
  reacted = false;

  constructor(
    private tutorService: TutorService
  ) {

  }

  ngOnInit() {

  }

  acceptReq() {
    this.tutorService.acceptRequests(this.requestObject.id)
      .subscribe(res => {
        console.log(res.json());
        alert("Requests accepted")
      });
    this.reacted = true;
  }

  rejectReq() {
    this.tutorService.rejectRequests(this.requestObject.id)
      .subscribe(res => {
        console.log(res.json());
        alert("Requests rejected")
      });
    this.reacted = true;
  }



}
