import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating;
  @Input() tutor;
  currentRate;
  review = null;
  

  constructor(
    private studentService: StudentService,
    private auth: AuthService,
    private toastr: ToastrManager
  ) {

  }

  ngOnInit() {
    this.currentRate = this.rating;
  }

  reviewTutor() {
    if (this.review === null) {
      alert("Please write a review");
      return;
    }




    let rate = {
      'rate': this.currentRate/2,
      'tutor': this.tutor,
      'student': this.auth.currentUser.user.email,
      'priority': this.currentRate
    };

    let review = {
      'content': this.review,
      'tutor': this.tutor,
      'student': this.auth.currentUser.user.email,
      'priority': 2
    };

    this.studentService.rateTutor(rate)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          this.toastr.warningToastr('Tutor must accept your request before rate him..!');
          return;
        }
        this.currentRate = res.json().newRate;
      });

    this.studentService.reviewTutor(review)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          this.toastr.warningToastr('Tutor must accept your request before review him..!');
          return;
        }
        this.toastr.successToastr('Thank you for your review...!');
      });


  }


}