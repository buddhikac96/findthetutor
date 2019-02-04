import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @Input() requestObject
  reacted = false;

  constructor(
    private tutorService: TutorService,
    private toastr: ToastrManager
  ) {

  }

  ngOnInit() {

  }

  acceptReq() {
    this.tutorService.acceptRequests(this.requestObject.id)
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr("Request accepted!");
        }else{
          this.toastr.errorToastr("There is some problem with accepting the request..! Please try again..!");
        }
        this.deleteComplete();
      });
    this.reacted = true;
  }

  rejectReq() {
    this.tutorService.rejectRequests(this.requestObject.id)
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr("Request rejected!");
        }else{
          this.toastr.errorToastr("There is some problem with rejecting the request.. Please try again..!");
        }
        this.deleteComplete();
      });
    this.reacted = true;
  }


  @Output()
  react = new EventEmitter<Object>();

  deleteComplete() {
    this.react.emit(this.requestObject);
  }



}
