import { Component, OnInit } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'teacher-card-list',
  templateUrl: './teacher-card-list.component.html',
  styleUrls: ['./teacher-card-list.component.scss']
})
export class TeacherCardListComponent implements OnInit {

  techerList: TeacherCard[] = [];
  isEmpty: boolean = false;

  message: any;
  subcription: Subscription;

  constructor(
    private studentService: StudentService
  ) {
    this.subcription = this.studentService.getMessage().subscribe(list => {
      this.techerList = list.teachers;
      if (this.techerList.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    })

  }

  ngOnInit() {
    try {
      this.studentService.getAllTeachers()
        .subscribe(res => {
          this.techerList = res.json().user;
          res.json().user.length === 0 ? this.isEmpty = true : this.isEmpty = false;
        });
    } catch (e) {
      alert("Something wrong...!");
    }

  }


}
