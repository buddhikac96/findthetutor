import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    private auth: AuthService
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

    if (this.currentRate === 0) {
      alert("Please rate the tutor");
      return;
    }

    let rate = {
      'rate': this.currentRate/2,
      'tutor': this.tutor,
      'student': this.auth.currentUser.user.email,
    };

    let review = {
      'content': this.review,
      'tutor': this.tutor,
      'student': this.auth.currentUser.user.email,
    };

    this.studentService.rateTutor(rate)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          alert("Tutor must accept your request");
          return;
        }
        this.currentRate = res.json().newRate;
      });

    this.studentService.reviewTutor(review)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          alert("Tutor must accept your request");
          return;
        }
        alert("Thank you for your review");
      });


  }


}