import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() itemId: number;
  @Input() tutorEmail: string;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  student;

  constructor(
    private studentService: StudentService,
    private auth: AuthService
  ) {
  }

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    this.student = this.auth.currentUser.user.email;
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
    this.studentService.rateTutor({ 'rate': rating, 'tutor': this.tutorEmail, 'student': this.student })
      .subscribe(response => {
        console.log(response);
      });
  }
}